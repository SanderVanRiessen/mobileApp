import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

interface MenuItemProps {
  title: string;
  onPress: () => void;
}
const MenuItem = ({title, onPress}: MenuItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
