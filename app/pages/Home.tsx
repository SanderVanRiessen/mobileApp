import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {MenuBar, Banner, Content, Footer} from '../layout';

function Home(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <MenuBar />
        <Banner />
        <Content />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
