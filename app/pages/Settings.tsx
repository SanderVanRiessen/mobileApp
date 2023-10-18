import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {MenuBar, Footer, SettingsContent} from '../layout';

function Settings(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <MenuBar title={'Settings'} />
        <SettingsContent />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Settings;
