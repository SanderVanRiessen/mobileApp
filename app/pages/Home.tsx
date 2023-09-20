import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {MenuBar, Banner, Content, Footer} from '../layout';

interface HomeProps {
  navigation: any;
}

function Home({navigation}: HomeProps): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <MenuBar navigation={navigation} />
        <Banner />
        <Content />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
