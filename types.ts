
export enum Page {
  Home = '/',
  About = '/about',
  Services = '/services',
  Contact = '/contact',
}

export interface Service {
  title: string;
  description: string;
  subServices?: Service[];
}

export interface ServiceCategory {
  step: number;
  name: string;
  title: string;
  description: string;
  bestFit: string;
  services: Service[];
  image: string;
}
