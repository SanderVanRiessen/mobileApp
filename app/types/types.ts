import {NavigationProp} from '@react-navigation/native';

type Ticket = {
  name: string;
  price: string;
};

type Pages = {
  Home: undefined;
  Tickets: undefined;
  TicketDetail: {name: string; price: string; description: string};
  Policy: undefined;
};

type StackNavigation = NavigationProp<Pages>;

export type {Ticket, StackNavigation, Pages};
