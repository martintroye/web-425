export interface CustomerAccount {
  name: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  contacts: Contact[];
}

export interface Contact {
  firstName: string;
  lastName: string;
  isPrimary: boolean;
  user: User;
  orders: Order[];
  phoneNumbers: PhoneNumber[];
  emails: EmailAddress[];
}

export interface User {
  userName: string;
  password: string;
  lastLogin: Date;
}

export interface PhoneNumber {
  phoneNumber: string;
  type: string;
  extension: string;
  isPrimary: boolean;
}

export interface EmailAddress {
  emailAddress: string;
  isPrimary: boolean;
}

export interface Order {
  orderDate: Date;
  orderCompleted: Date;
  total: number;
  invoiceDate: Date;
  invoicePaidDate: Date;
  items: OrderItem[];
}

export interface OrderItem {
  quantity: number;
  itemTotal: number;
  item: PriceBookItem;
  technicians: Technician[];
}

export interface PriceBookItem {
  name: string;
  price: number;
  type: string;
}

export interface Technician {
  name: string;
  emailAddress: string;
}


