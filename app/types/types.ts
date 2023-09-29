import {NavigationProp} from '@react-navigation/native';

type Ticket = {
  name: string;
  price: string;
};

interface BarIconsProps {
  name: string;
  color: string;
  size: number;
}

type Pages = {
  Home: undefined;
  Main: undefined;
  Tickets: undefined;
  TicketsList: undefined;
  TicketDetail: {name: string; price: string; description: string};
  Policy: undefined;
  PolicyMain: undefined;
};

type StackNavigation = NavigationProp<Pages>;

export type {Ticket, StackNavigation, Pages, BarIconsProps};
