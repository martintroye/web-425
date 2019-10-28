/*
============================================
; Title: Web425
; Author: Troy Martin
; Date: 10/26/2019
; Modified By: Troy Martin
; Description: Bob's Computer Repair Shop API
;===========================================
*/

import * as mongoose from 'mongoose';
import { CustomerAccount } from './customer-account.interface';

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  lastLogin: Date
});

const priceBookItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: Number,
  type: { type: String, required: true, enum: ['Service', 'Part', 'Labor'] }
});

const technicianSchema = new mongoose.Schema({
  name: { type: String, required: true },
  emailAddress: String
});

const orderItemSchema = new mongoose.Schema({
  quantity: Number,
  itemTotal: Number,
  item: { type: priceBookItemSchema, required: true },
  technician: [technicianSchema]
});

const orderSchema = new mongoose.Schema({
  orderDate: { type: Date, default: Date.now },
  orderCompleted: Date,
  total: Number,
  invoiceDate: Date,
  invoicePaidDate: Date,
  items: [orderItemSchema]
});

const phoneNumberSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  type: String,
  extension: String,
  isPrimary: { type: Boolean, default: false }
});

const emailAddressSchema = new mongoose.Schema({
  emailAddress: { type: String, required: true },
  isPrimary: { type: Boolean, default: false }
});

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  isPrimary: { type: Boolean, default: false },
  user: userSchema,
  orders: [orderSchema],
  phoneNumbers: [phoneNumberSchema],
  emails: [emailAddressSchema]
});

const customerAccountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  postalCode: String,
  contacts: [contactSchema]
});

const customerAccountModel = mongoose.model<CustomerAccount>('CustomerAccountModel', customerAccountSchema, 'accounts');
export = customerAccountModel;






