import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types/types';

interface MenuBarProps {
  title?: string;
}

export function MenuBar({title = 'Lotto'}: MenuBarProps): JSX.Element {
  const {canGoBack, goBack} = useNavigation<StackNavigation>();

  return (
    <View style={styles.menuContainer}>
      {canGoBack() && (
        <IconButton
          icon={'keyboard-backspace'}
          iconColor="white"
          size={24}
          style={styles.backButton}
          onPress={() => goBack()}
        />
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
