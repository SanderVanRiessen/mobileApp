import React from 'react';
import {Text, Button, View} from 'react-native';
import {styles} from './styles';

export function MenuBar(): JSX.Element {
  return (
    <View style={styles.menuContainer}>
      <Button title="Back" onPress={() => console.log('Button clicked')} />
      <Text>MenuBar</Text>
      <Button title="Menu" onPress={() => console.log('Button clicked')} />
    </View>
  );
}
