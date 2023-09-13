import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {IconButton} from 'react-native-paper';

export function MenuBar(): JSX.Element {
  return (
    <View style={styles.menuContainer}>
      <Text style={styles.text}>Lotto</Text>
      <IconButton
        icon={'menu'}
        iconColor="white"
        size={28}
        onPress={() => console.log('on click')}
      />
    </View>
  );
}
