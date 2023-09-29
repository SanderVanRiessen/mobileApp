import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {CardProps, StackNavigation} from '../../types/types';
import {useNavigation} from '@react-navigation/native';

interface CheckoutProps {
  cart: CardProps[];
}
export default function Checkout({cart}: CheckoutProps): JSX.Element {
  const navigation = useNavigation<StackNavigation>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.subText}>Your cart:</Text>
      <View style={styles.list}>
        {cart.map(({name, amount, price}) => {
          const total = amount * parseFloat(price);
          return (
            <Text style={styles.price} key={name}>
              {name} x {amount} = {total}
            </Text>
          );
        })}
      </View>
      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
