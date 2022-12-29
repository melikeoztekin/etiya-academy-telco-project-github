import { City } from './city';

export interface Adress {
  id: number;
  city: City[];
  street: string;
  flatNumber: number;
  description: string;
}
