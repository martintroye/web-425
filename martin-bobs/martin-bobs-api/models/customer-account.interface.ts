/*
============================================
; Title: Web425
; Author: Troy Martin
; Date: 10/26/2019
; Modified By: Troy Martin
; Description: Bob's Computer Repair Shop API
;===========================================
*/

// import the mongoose module
import { Schema, Document, Model } from 'mongoose';

// declare and export the customer account interface, extending the mongoose document
export interface CustomerAccount extends Document {
  name: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  contacts: Contact[];
}

// declare and export the contact interface, extending the mongoose document
export interface Contact extends Document {
  firstName: string;
  lastName: string;
  isPrimary: boolean;
  user: User;
  orders: Order[];
  phoneNumbers: PhoneNumber[];
  emails: EmailAddress[];
}

// declare and export the customer account interface, extending the mongoose document
export interface User extends Document {
  userName: string;
  password: string;
  lastLogin: Date;
}

// declare and export the customer account interface, extending the mongoose document
export interface PhoneNumber extends Document {
  phoneNumber: string;
  type: string;
  extension: string;
  isPrimary: boolean;
}

// declare and export the email address interface, extending the mongoose document
export interface EmailAddress extends Document {
  emailAddress: string;
  isPrimary: boolean;
}

// declare and export the order interface, extending the mongoose document
export interface Order extends Document {
  orderDate: Date;
  orderCompleted: Date;
  total: number;
  invoiceDate: Date;
  invoicePaidDate: Date;
  items: OrderItem[];
}

// declare and export the order item interface, extending the mongoose document
export interface OrderItem extends Document {
  quantity: number;
  itemTotal: number;
  item: PriceBookItem;
  technicians: Technician[];
}

// declare and export the price book item interface, extending the mongoose document
export interface PriceBookItem extends Document {
  name: string;
  price: number;
  type: string;
}

// declare and export the technician interface, extending the mongoose document
export interface Technician extends Document {
  name: string;
  emailAddress: string;
}


