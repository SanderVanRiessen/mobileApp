import React from 'react';
import {View, TouchableOpacity, Text, ButtonProps} from 'react-native';
import {styles} from './styles';

interface BannerButtonProps extends ButtonProps {
  onPress: () => void;
  title: string;
  subtitle?: string;
}

export function BannerButton({
  onPress,
  title,
  subtitle,
}: BannerButtonProps): JSX.Element {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
        <Text style={styles.buttonSubText}>{subtitle}</Text>
      </TouchableOpacity>
    </View>
  );
}
