import React, {useState} from 'react';
import {View, TextInput, ScrollView} from 'react-native';
import styles from './styles';
import TicketCard from './TicketCard';
import {Ticket} from '../../types/types';
import {TicketSale} from '../../components';

const inTickets = [
  {name: '1 lottery ticket', price: '2.50€', id: 1},
  {name: '5 lottery ticket', price: '15€', id: 2},
  {name: '10 lottery ticket', price: '30€', id: 3},
  {name: 'Montly ticket', price: '30€ per month', id: 4},
  {name: 'weekly ticket', price: '15€ per week', id: 5},
  {name: 'Yearly ticket', price: '300€ per year', id: 6},
];

const TicketList = () => {
  const [tickets, setTickets] = useState(inTickets);
  const [currentTicket, setCurrentTicket] = useState<Ticket | null>(null);

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
        {tickets.map(({name, id, price}) => (
          <TicketCard
            key={id}
            name={name}
            subtitle={price}
            onPress={() => setCurrentTicket({name, price})}
          />
        ))}
      </View>
      {currentTicket && (
        <TicketSale
          ticket={currentTicket.name}
          price={currentTicket.price}
          onClose={() => setCurrentTicket(null)}
        />
      )}
    </View>
  );
};

export default TicketList;
