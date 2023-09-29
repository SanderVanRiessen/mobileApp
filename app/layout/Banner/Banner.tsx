import React, {useState} from 'react';
import {ImageBackground, View, Text} from 'react-native';
import {Chip} from 'react-native-paper';
import {styles} from './styles';
import {BannerButton} from '../../components/BannerButton/BannerButton';
import {TicketSale} from '../../components';
import type {Ticket} from '../../types/types';

const image = {
  uri: 'https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483_1280.jpg',
};

export function Banner(): JSX.Element {
  const [currentTicket, setCurrentTicket] = useState<Ticket | null>(null);
  return (
    <View>
      <ImageBackground style={styles.background} source={image}>
        <View style={styles.uppperBannerContainer}>
          <Text style={styles.title}>new Lotto millonaires every sunday</Text>
          <Chip style={styles.chip}>
            About 14 million in the first price pot
          </Chip>
        </View>
        <Text style={styles.subText}>Game deadline Saturday at 18:00</Text>
        <View style={styles.buttonContainer}>
          <BannerButton
            title="1 week"
            subtitle="50kr"
            onPress={() => setCurrentTicket({name: '1 week', price: '50kr'})}
          />
          <BannerButton
            title="5 week"
            subtitle="250kr"
            onPress={() => setCurrentTicket({name: '1 week', price: '50kr'})}
          />
          <BannerButton title="Subscribe" onPress={() => console.log('new')} />
          <BannerButton
            title="Fill in yourself"
            onPress={() => console.log('new')}
          />
        </View>
      </ImageBackground>
      {currentTicket && (
        <TicketSale
          ticket={currentTicket.name}
          price={currentTicket.price}
          onClose={() => setCurrentTicket(null)}
          onBuy={() => setCurrentTicket(null)}
        />
      )}
    </View>
  );
}
