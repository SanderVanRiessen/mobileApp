import React from 'react';
import {Text, ImageBackground, Button, View} from 'react-native';
import {styles} from './styles';

const image = {
  uri: 'https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483_1280.jpg',
};

export function Banner(): JSX.Element {
  return (
    <View>
      <ImageBackground source={image} />
    </View>
  );
}
