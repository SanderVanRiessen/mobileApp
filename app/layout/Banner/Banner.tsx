import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import {styles} from './styles';
import {BannerButton} from '../../components/BannerButton/BannerButton';

const image = {
  uri: 'https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483_1280.jpg',
};

export function Banner(): JSX.Element {
  return (
    <View>
      <ImageBackground style={styles.background} source={image}>
        <Text style={styles.text}>new</Text>
        <Text style={styles.text}>chip</Text>
        <Text style={styles.text}>new</Text>
        <View style={styles.buttonContainer}>
          <BannerButton
            title="1 week"
            subtitle="50kr"
            onPress={() => console.log('new')}
          />
          <BannerButton
            title="5 week"
            subtitle="250kr"
            onPress={() => console.log('new')}
          />
          <BannerButton title="Subscribe" onPress={() => console.log('new')} />
          <BannerButton
            title="Fill in yourself"
            onPress={() => console.log('new')}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
