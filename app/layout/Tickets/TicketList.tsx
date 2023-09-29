import React, {useState} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './styles';
import {StackNavigation, Ticket, CardProps} from '../../types/types';
import {TicketSale, TicketCard} from '../../components';
import {inTickets} from '../../data';
import {useNavigation} from '@react-navigation/native';

const TicketList = () => {
  const navigation = useNavigation<StackNavigation>();
  const [tickets, setTickets] = useState(inTickets);
  const [currentTicket, setCurrentTicket] = useState<Ticket | null>(null);
  const [cart, setCart] = useState<CardProps[]>([]);

  const buyTicket = (count?: number) => {
    if (!count || !currentTicket) {
      setCurrentTicket(null);
      return;
    }
    const {name, price} = currentTicket;
    setCart([...cart, {name, amount: count, price}]);
    setCurrentTicket(null);
  };
  return (
    <View style={styles.container}>
      <ScrollView keyboardDismissMode="interactive">
        <TextInput
          onChangeText={text => {
            const filteredTickets = inTickets.filter(ticket =>
              ticket.name.includes(text),
            );
            setTickets(filteredTickets);
          }}
          placeholder={'Search for tickets'}
          style={styles.search}
        />
      </ScrollView>
      <View style={styles.listContainer}>
        {tickets.map(({name, id, price, description}) => (
          <TicketCard
            key={id}
            name={name}
            subtitle={price}
            description={description}
            onPress={() => setCurrentTicket({name, price})}
          />
        ))}
      </View>
      {currentTicket && (
        <TicketSale
          ticket={currentTicket.name}
          price={currentTicket.price}
          onClose={() => setCurrentTicket(null)}
          onBuy={count => {
            buyTicket(count);
          }}
        />
      )}
      {cart.length > 0 && (
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => {
            navigation.navigate('Cart', {cart});
          }}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TicketList;
