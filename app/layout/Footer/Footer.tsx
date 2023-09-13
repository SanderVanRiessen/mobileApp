import React from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {IconButton} from '../../components';

export function Footer(): JSX.Element {
  return (
    <View style={styles.footerContainer}>
      <IconButton
        title="Results"
        subTitle="Winning numbers and prizes"
        icon="angle-right"
        width="auto"
        height={80}
        backgroundColor="blue"
        color="white"
        subTextColor="white"
        iconColor="white"
        fontSize={17}
        subFontSize={14}
        iconSize={28}
      />
    </View>
  );
}
