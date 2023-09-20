import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {MenuBar, Footer, TicketList} from '../layout';

interface TicketsProps {
  navigation: any;
}

function Tickets({navigation}: TicketsProps): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <MenuBar title={'Tickets'} navigation={navigation} />
        <TicketList />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Tickets;
