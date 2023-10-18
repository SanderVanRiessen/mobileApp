import React, {useState, useCallback} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {ProfileProps, StackNavigation} from '../../types/types';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

export const SettingsContent = () => {
  const navigation = useNavigation<StackNavigation>();
  const [profile, setProfile] = useState<ProfileProps | null>(null);
  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('profile').then(e => {
        if (e) {
          setProfile(JSON.parse(e));
        } else {
          setProfile(null);
        }
      });
    }, []),
  );
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          value={profile?.username || ''}
          style={styles.textInput}
          onChangeText={e =>
            setProfile(prevProfile => ({
              ...prevProfile,
              username: e,
              email: prevProfile?.email || '',
            }))
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          value={profile?.email || ''}
          style={styles.textInput}
          onChangeText={e =>
            setProfile(prevProfile => ({
              ...prevProfile,
              username: prevProfile?.username || '',
              email: e,
            }))
          }
        />
      </View>
      <View style={styles.saveButton}>
        <Button
          title="Save"
          color={'black'}
          onPress={() => {
            AsyncStorage.setItem('profile', JSON.stringify(profile)).finally(
              () => {
                navigation.navigate('Home');
              },
            );
          }}
        />
      </View>
      <View style={styles.saveButton}>
        <Button
          title="Clear"
          color={'black'}
          onPress={() => {
            AsyncStorage.clear().finally(() => {
              navigation.goBack();
            });
          }}
        />
      </View>
    </View>
  );
};
