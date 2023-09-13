import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';
import {IconButton} from '../../components';

export function Footer(): JSX.Element {
  return (
    <View style={styles.footerContainer}>
      <IconButton
        title="Results"
        subTitle="Winning numbers and prizes"
        icon="angle-right"
      />
    </View>
  );
}
