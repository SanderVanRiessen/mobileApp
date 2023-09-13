import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {IconButton} from '../../components';
import {styles} from './styles';

export function Content(): JSX.Element {
  return (
    <View>
      <View style={styles.infoTextContainer}>
        <Icon name="info-circle" size={18} color="black" />
        <Text style={styles.infoText}>
          Change of winning 1st prize: 15.4 million, per row
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton title="Lucky coupon" icon="heart-o" />
        <IconButton title="Cooperative bank" icon="pie-chart" />
        <IconButton title="Systemspill" icon="desktop" />
        <IconButton title="Super draw" icon="star-o" />
        <IconButton title="This is how you play" icon="question-circle-o" />
      </View>
    </View>
  );
}
