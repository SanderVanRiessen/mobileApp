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
  Cart: {cart: CardProps[]};
};

type StackNavigation = NavigationProp<Pages>;

interface CardProps extends Ticket {
  amount: number;
}

export type {Ticket, StackNavigation, Pages, BarIconsProps, CardProps};
