import React from 'react';
import {View, TouchableOpacity, Text, ButtonProps} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IconButtonProps extends ButtonProps {
  title: string;
  subTitle?: string;
  icon: string;
  onPress?: () => void;
  width?: number;
}

export function IconButton({
  title,
  icon,
  onPress,
  subTitle,
  width = 180,
}: IconButtonProps): JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>{title}</Text>
          {subTitle && <Text style={styles.subText}>{subTitle}</Text>}
        </View>
        <Icon name={icon} size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
}
