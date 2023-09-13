import React from 'react';
import {View, TouchableOpacity, Text, ButtonProps} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IconButtonProps extends ButtonProps {
  title: string;
  subTitle?: string;
  icon: string;
  onPress?: () => void;
  width?: number | 'auto';
  height?: number | 'auto';
  color?: string;
  subTextColor?: string;
  backgroundColor?: string;
  iconColor?: string;
  iconSize?: number;
  fontSize?: number;
  subFontSize?: number;
}

export function IconButton({
  title,
  icon,
  onPress,
  subTitle,
  width = 180,
  height = 'auto',
  color = 'black',
  subTextColor = 'rgba(0,0,0,0.4);',
  backgroundColor = '#e2dee7',
  iconColor = 'black',
  iconSize = 20,
  fontSize = 13,
  subFontSize = 10,
}: IconButtonProps): JSX.Element {
  return (
    <View>
      <TouchableOpacity
        style={{...styles.button, width, height, backgroundColor}}
        onPress={onPress}>
        <View style={styles.titleContainer}>
          <Text style={{...styles.text, color, fontSize}}>{title}</Text>
          {subTitle && (
            <Text
              style={{
                ...styles.subText,
                color: subTextColor,
                fontSize: subFontSize,
              }}>
              {subTitle}
            </Text>
          )}
        </View>
        <Icon name={icon} size={iconSize} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
}
