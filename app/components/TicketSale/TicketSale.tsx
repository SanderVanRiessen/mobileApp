import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

import styles from './styles';
import {IconButton} from '../IconButton/IconButton';
import Popover, {PopoverPlacement} from 'react-native-popover-view';
import {headers, url} from '../../data';

interface TicketSaleProps {
  onClose: () => void;
  name: string;
  price: number;
  amount?: number;
  id?: number;
  callback?: () => void;
}
const TicketSale = ({
  onClose,
  name,
  price,
  amount,
  id,
  callback,
}: TicketSaleProps) => {
  const [count, setCount] = useState(amount || 0);
  const postTicket = () => {
    fetch(url + 'cart', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        name,
        price,
        amount: count,
      }),
    })
      .then(res => res.json())
      .then(_ => {
        onClose();
      })
      .catch(err => console.log(err));
  };

  const updateCart = (
    ticketId: number,
    ticketAmount: number,
    ticketName: string,
    ticketPrice: number,
  ) => {
    fetch(url + `cart/${ticketId}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        amount: ticketAmount,
        name: ticketName,
        price: ticketPrice,
      }),
    })
      .then(res => res.json())
      .then(_ => {
        if (callback) {
          callback();
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <Popover
      isVisible={true}
      onRequestClose={() => onClose()}
      placement={PopoverPlacement.FLOATING}
      popoverShift={{y: 0}}>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subText}>{price}€</Text>
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
            onPress={() => {
              if (id) {
                updateCart(id, count, name, price);
              } else {
                postTicket();
              }
            }}
          />
        </View>
      </View>
    </Popover>
  );
};

export default TicketSale;
