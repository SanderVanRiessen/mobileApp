import React, {useState} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './styles';
import {StackNavigation, Ticket} from '../../types/types';
import {TicketSale, TicketCard} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useTickets} from '../../apicalls';

const TicketList = () => {
  const {data, error, loading} = useTickets();
  const navigation = useNavigation<StackNavigation>();

  const [search, setSearch] = useState('');
  const [currentTicket, setCurrentTicket] = useState<Ticket | null>(null);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Something went wrong</Text>;
  }
  return (
    <View style={styles.container}>
      <ScrollView keyboardDismissMode="interactive">
        <TextInput
          onChangeText={text => {
            setSearch(text);
          }}
          placeholder={'Search for tickets'}
          style={styles.search}
        />
      </ScrollView>
      <View style={styles.listContainer}>
        {data
          .filter(({name}) => name.includes(search))
          .map(({name, id, price, description}) => (
            <TicketCard
              id={id}
              key={id}
              name={name}
              price={price}
              description={description}
              onPress={() => setCurrentTicket({name, price, id, description})}
            />
          ))}
      </View>
      {currentTicket && (
        <TicketSale
          name={currentTicket.name}
          price={currentTicket.price}
          onClose={() => setCurrentTicket(null)}
        />
      )}
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TicketList;
