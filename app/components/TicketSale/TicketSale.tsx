import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

import styles from './styles';
import {IconButton} from '../IconButton/IconButton';
import Popover, {PopoverPlacement} from 'react-native-popover-view';

interface TicketSaleProps {
  onClose: () => void;
  ticket: string;
  price: string;
}
const TicketSale = ({onClose, ticket, price}: TicketSaleProps) => {
  const [count, setCount] = useState(0);
  return (
    <Popover
      isVisible={true}
      onRequestClose={() => onClose()}
      placement={PopoverPlacement.FLOATING}
      popoverShift={{y: 0}}>
      <View style={styles.container}>
        <Text style={styles.title}>{ticket}</Text>
        <Text style={styles.subText}>{price}</Text>
        <View style={styles.amount}>
          <Button
            onPress={() => {
              setCount(count + 1);
            }}
            title="+"
            color="#000000"
          />
          <Text style={styles.ambountText}>Amount of tickets: {count}</Text>
          <Button
            onPress={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
            title="-"
            color="#000000"
          />
        </View>
        <View style={styles.footer}>
          <IconButton
            title="Buy"
            width={150}
            icon="shopping-cart"
            onPress={() => onClose()}
          />
        </View>
      </View>
    </Popover>
  );
};

export default TicketSale;
