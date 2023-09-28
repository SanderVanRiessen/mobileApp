import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {MenuBar, Footer, TicketList} from '../layout';

function Tickets(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <MenuBar title={'Tickets'} />
        <TicketList />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Tickets;
