import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {MenuBar, Footer, LotteryPolicy} from '../layout';

function Policy(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <MenuBar title={'Policy'} />
        <LotteryPolicy />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Policy;
