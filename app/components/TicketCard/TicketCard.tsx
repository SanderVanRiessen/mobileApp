import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {StackNavigation} from '../../types/types';

interface TicketCardProps {
  name: string;
  subtitle: string;
  description: string;
  onPress: () => void;
}

const TicketCard = ({
  name,
  subtitle,
  description,
  onPress,
}: TicketCardProps) => {
  const navigation = useNavigation<StackNavigation>();
  const redirectDetails = () => {
    navigation.navigate('TicketDetail', {
      name,
      price: subtitle,
      description,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subText}>{subtitle}</Text>
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
