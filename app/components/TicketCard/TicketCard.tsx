import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {StackNavigation} from '../../types/types';

interface TicketCardProps {
  name: string;
  price: number;
  description: string;
  onPress: () => void;
  id: number;
}

const TicketCard = ({
  name,
  price,
  description,
  id,
  onPress,
}: TicketCardProps) => {
  const navigation = useNavigation<StackNavigation>();
  const redirectDetails = () => {
    navigation.navigate('TicketDetail', {
      name,
      price,
      description,
      id,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subText}>{price}€</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={redirectDetails}>
            <Text style={styles.detailButton}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.buyButton}>buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TicketCard;
