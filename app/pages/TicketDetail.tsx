import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {MenuBar, Footer, TicketContent} from '../layout';
import {Pages} from '../types/types';

function TicketDetail(): JSX.Element {
  const {params} = useRoute<RouteProp<Pages, 'TicketDetail'>>();
  const {name, price, description} = params;
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <MenuBar title={name} />
        <TicketContent name={name} price={price} description={description} />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

export default TicketDetail;
