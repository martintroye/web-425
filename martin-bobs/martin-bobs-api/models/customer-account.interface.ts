/*
============================================
; Title: Web425
; Author: Troy Martin
; Date: 10/26/2019
; Modified By: Troy Martin
; Description: Bob's Computer Repair Shop API
;===========================================
*/


import { Schema, Document, Model } from 'mongoose';

export interface CustomerAccount extends Document {
  name: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  contacts: Contact[];
}

export interface CustomerAccountModel extends Model<CustomerAccount> {};

export interface Contact extends Document {
  firstName: string;
  lastName: string;
  isPrimary: boolean;
  user: User;
  orders: Order[];
  phoneNumbers: PhoneNumber[];
  emails: EmailAddress[];
}

export interface User extends Document {
  userName: string;
  password: string;
  lastLogin: Date;
}

export interface PhoneNumber extends Document {
  phoneNumber: string;
  type: string;
  extension: string;
  isPrimary: boolean;
}

export interface EmailAddress extends Document {
  emailAddress: string;
  isPrimary: boolean;
}

export interface Order extends Document {
  orderDate: Date;
  orderCompleted: Date;
  total: number;
  invoiceDate: Date;
  invoicePaidDate: Date;
  items: OrderItem[];
}

export interface OrderItem extends Document {
  quantity: number;
  itemTotal: number;
  item: PriceBookItem;
  technicians: Technician[];
}

export interface PriceBookItem extends Document {
  name: string;
  price: number;
  type: string;
}

export interface Technician extends Document {
  name: string;
  emailAddress: string;
}


