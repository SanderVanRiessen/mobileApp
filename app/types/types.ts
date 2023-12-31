import {NavigationProp} from '@react-navigation/native';

type Ticket = {
  name: string;
  price: number;
  description: string;
  id: number;
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
  TicketDetail: Ticket;
  Policy: undefined;
  PolicyMain: undefined;
  Cart: undefined;
  Settings: undefined;
  SettingsMain: undefined;
};

type StackNavigation = NavigationProp<Pages>;

interface CardProps {
  amount: number;
  id: number;
  name: string;
  price: number;
}

interface ProfileProps {
  username: string;
  email: string;
}

export type {
  Ticket,
  StackNavigation,
  Pages,
  BarIconsProps,
  CardProps,
  ProfileProps,
};
