import React, {useState} from 'react';
import {Text, ScrollView, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {CardProps, StackNavigation} from '../../types/types';
import {useNavigation} from '@react-navigation/native';
import {useCart} from '../../apicalls';
import {CartItem, TicketSale} from '../../components';
import {headers, url} from '../../data';

export default function Checkout(): JSX.Element {
  const {data, error, loading, refetch} = useCart();
  const [currentTicket, setCurrentTicket] = useState<CardProps | null>(null);
  const navigation = useNavigation<StackNavigation>();

  const deleteCartItem = (id: number) => {
    fetch(url + `cart/${id}`, {
      method: 'DELETE',
      headers,
    })
      .then(res => res.json())
      .then(_ => {
        refetch();
      })
      .catch(e => {
        console.log(e);
      });
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Something went wrong</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.subText}>Your cart:</Text>
      <ScrollView style={styles.list}>
        {data.map(({name, amount, price, id}, i) => (
          <CartItem
            key={i}
            name={name}
            amount={amount}
            price={price}
            onDelete={() => deleteCartItem(id)}
            onEdit={() => {
              setCurrentTicket({name, amount, price, id});
            }}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => {
          data.forEach(({id}) => {
            deleteCartItem(id);
          });
          navigation.goBack();
        }}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
      {currentTicket && (
        <TicketSale
          onClose={() => setCurrentTicket(null)}
          name={currentTicket.name}
          price={currentTicket.price}
          amount={currentTicket.amount}
          id={currentTicket.id}
          callback={() => {
            refetch();
            setCurrentTicket(null);
          }}
        />
      )}
    </View>
  );
}
