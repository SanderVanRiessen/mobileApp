import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import TicketCard from './TicketCard';

const TicketList = () => {
  return (
    <View style={styles.container}>
      <Text>TicketList</Text>
      <TicketCard />
    </View>
  );
};

export default TicketList;
