import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface TicketCardProps {
  name: string;
  subtitle?: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    flexBasis: '48%',
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 'auto',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
  textContainer: {
    alignItems: 'center',
  },
});

const TicketCard = ({name, subtitle, onPress}: TicketCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subText}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TicketCard;
