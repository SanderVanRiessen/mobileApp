import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {MenuBar, Footer, Checkout} from '../layout';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Pages} from '../types/types';

function Tickets(): JSX.Element {
  const {params} = useRoute<RouteProp<Pages, 'Cart'>>();
  const {cart} = params;
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <MenuBar title={'Cart'} />
        <Checkout cart={cart} />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Tickets;
