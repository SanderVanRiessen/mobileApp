import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Home, Tickets, TicketDetail, Policy, Cart} from './app/pages';
import {BarIconsProps, Pages} from './app/types/types';

const HomeStack = createNativeStackNavigator<Pages>();
const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false}}>
    <HomeStack.Screen name="Main" component={Home} />
  </HomeStack.Navigator>
);

const TicketsStack = createNativeStackNavigator<Pages>();
const TicketsStackScreen = () => (
  <TicketsStack.Navigator screenOptions={{headerShown: false}}>
    <TicketsStack.Screen name="TicketsList" component={Tickets} />
    <TicketsStack.Screen name="TicketDetail" component={TicketDetail} />
    <TicketsStack.Screen name="Cart" component={Cart} />
  </TicketsStack.Navigator>
);

const PolicyStack = createNativeStackNavigator<Pages>();
const PolicyStackScreen = () => (
  <PolicyStack.Navigator screenOptions={{headerShown: false}}>
    <PolicyStack.Screen name="PolicyMain" component={Policy} />
  </PolicyStack.Navigator>
);

const Tab = createBottomTabNavigator<Pages>();

function barIcons({name, color, size}: BarIconsProps): JSX.Element {
  let iconName = 'home';
  if (name === 'Tickets') {
    iconName = 'ticket';
  }
  if (name === 'Policy') {
    iconName = 'user';
  }
  return <Icon name={iconName} size={size} color={color} />;
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            return barIcons({name: route.name, color, size});
          },
          headerShown: false,
        })}
        initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Tickets" component={TicketsStackScreen} />
        <Tab.Screen name="Policy" component={PolicyStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
