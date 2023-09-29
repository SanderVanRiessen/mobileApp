import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {TicketSale} from '../../components';
import {Ticket} from '../../types/types';

interface TicketContent {
  name: string;
  price: string;
  description: string;
}

const image =
  'https://media.istockphoto.com/id/1291862179/vector/person-holding-a-winning-lottery-ticket.jpg?s=612x612&w=0&k=20&c=hOYrzbx8ZoK4kHq513n_H590IwhYj4K0mFIcWng-j5U=';

export function TicketContent({
  name,
  price,
  description,
}: TicketContent): JSX.Element {
  const [currentTicket, setCurrentTicket] = useState<Ticket | null>(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity onPress={() => setCurrentTicket({name, price})}>
        <Text style={styles.buyButton}>buy</Text>
      </TouchableOpacity>
      {currentTicket && (
        <TicketSale
          ticket={currentTicket.name}
          price={currentTicket.price}
          onClose={() => setCurrentTicket(null)}
          onBuy={() => setCurrentTicket(null)}
        />
      )}
    </View>
  );
}
