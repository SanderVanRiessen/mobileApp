import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import MenuItem from './MenuItem';
import {IconButton} from 'react-native-paper';
import Popover, {PopoverPlacement} from 'react-native-popover-view';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types/types';

interface MenuBarProps {
  title?: string;
}

export function MenuBar({title = 'Lotto'}: MenuBarProps): JSX.Element {
  const {navigate} = useNavigation<StackNavigation>();
  const [isVisible, setIsVisible] = useState(false);

  const handleRedirect = (dir: string) => {
    navigate(dir);
    setIsVisible(false);
  };

  return (
    <View style={styles.menuContainer}>
      <Text style={styles.text}>{title}</Text>
      <IconButton
        icon={'menu'}
        iconColor="white"
        size={28}
        onPress={() => setIsVisible(true)}
      />
      <Popover
        isVisible={isVisible}
        onRequestClose={() => setIsVisible(false)}
        placement={PopoverPlacement.FLOATING}
        popoverShift={{y: 0}}>
        <View style={styles.menu}>
          <MenuItem title="Home" onPress={() => handleRedirect('Home')} />
          <MenuItem title="Tickets" onPress={() => handleRedirect('Tickets')} />
          <MenuItem title="Policy" onPress={() => handleRedirect('Policy')} />
        </View>
      </Popover>
    </View>
  );
}
