import React, {useState} from 'react';
import {View, TextInput, ScrollView} from 'react-native';
import styles from './styles';
import {Ticket} from '../../types/types';
import {TicketSale, TicketCard} from '../../components';
import {inTickets} from '../../data';

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
        />
      )}
    </View>
  );
};

export default TicketList;
