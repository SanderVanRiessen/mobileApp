import React, {useCallback, useState} from 'react';
import {Text, ScrollView, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {CardProps, ProfileProps, StackNavigation} from '../../types/types';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCart} from '../../apicalls';
import {CartItem, TicketSale} from '../../components';
import {headers, url} from '../../data';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Checkout(): JSX.Element {
  const {data, error, loading, refetch} = useCart();
  const navigation = useNavigation<StackNavigation>();
  const [currentTicket, setCurrentTicket] = useState<CardProps | null>(null);
  const [profile, setProfile] = useState<ProfileProps | null>(null);

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('profile').then(e => {
        if (e) {
          setProfile(JSON.parse(e));
        } else {
          setProfile(null);
        }
      });
    }, []),
  );

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
      <View>
        <Text style={styles.subText}>Your details:</Text>
        {profile ? (
          <>
            <View style={styles.invoice}>
              <Text style={styles.label}>Username:</Text>
              <Text style={styles.value}>{profile.username}</Text>
            </View>
            <View style={styles.invoice}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{profile.email}</Text>
            </View>
          </>
        ) : (
          <Text style={styles.subText}>
            Please set your details in the settings
          </Text>
        )}
      </View>
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
