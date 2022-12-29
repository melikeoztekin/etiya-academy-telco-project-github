export interface CustomerFilter {
  id: number | null;
  customerId: number | null;
  accountNumber: string;
  gsmNumber: string;
  firstName: string;
  lastName: string;
  orderNumber: number | null;
}
