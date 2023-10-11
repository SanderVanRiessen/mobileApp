import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {MenuBar, Footer, Checkout} from '../layout';

function Tickets(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <MenuBar title={'Cart'} />
        <Checkout />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Tickets;
