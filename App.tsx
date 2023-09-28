import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Tickets, TicketDetail, Policy} from './app/pages';
import {Pages} from './app/types/types';

const Stack = createNativeStackNavigator<Pages>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tickets" component={Tickets} />
        <Stack.Screen name="TicketDetail" component={TicketDetail} />
        <Stack.Screen name="Policy" component={Policy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
