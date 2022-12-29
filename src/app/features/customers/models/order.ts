import { Offer } from './offer';

export interface Order {
  id: number;
  orderNumber: number;
  offers: Offer[];
}
