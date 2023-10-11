import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Button} from 'react-native-paper';

interface CartItemProps {
  name: string;
  price: number;
  amount: number;
  onDelete: () => void;
  onEdit: () => void;
}

const CartItem = ({
  name,
  price,
  amount,
  onDelete,
  onEdit,
}: CartItemProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{amount} x </Text>
          <Text style={styles.price}>€{price.toFixed(2)}</Text>
          <Text style={styles.totalPrice}>
            {' '}
            = €{(amount * price).toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContianer}>
        <Button
          icon="delete"
          mode="contained"
          buttonColor="#000000"
          onPress={() => onDelete()}>
          Delete
        </Button>
        <Button
          icon="pencil"
          mode="contained"
          buttonColor="#000000"
          onPress={() => onEdit()}>
          edit
        </Button>
      </View>
    </View>
  );
};

export default CartItem;
