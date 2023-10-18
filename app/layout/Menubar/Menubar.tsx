import React, {useCallback, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {IconButton} from 'react-native-paper';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface MenuBarProps {
  title?: string;
}

export function MenuBar({title}: MenuBarProps): JSX.Element {
  const {canGoBack, goBack} = useNavigation<StackNavigation>();

  const [username, setUsername] = useState('Lotto');
  useFocusEffect(
    useCallback(() => {
      loadProfile();
    }, []),
  );
  const loadProfile = () => {
    AsyncStorage.getItem('profile').then(e => {
      if (e) {
        setUsername(JSON.parse(e).username);
      } else {
        setUsername('Lotto');
      }
    });
  };

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
      <Text style={styles.text}>{title || username}</Text>
    </View>
  );
}
