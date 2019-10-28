/*
============================================
; Title: Web425
; Author: Troy Martin
; Date: 10/26/2019
; Modified By: Troy Martin
; Description: Bob's Computer Repair Shop API
;===========================================
*/

// import the mongoose module and alias as mongoose
import * as mongoose from 'mongoose';
// import the customer account interfaces
import { CustomerAccount } from './customer-account.interface';

// declare the mongoose user schema
const userSchema = new mongoose.Schema({
  // declare userName as string and set required
  userName: { type: String, required: true },
  // declare password as string as set required
  password: { type: String, required: true },
  lastLogin: Date
});

// declare the mongoose priceBookItem schema
const priceBookItemSchema = new mongoose.Schema({
  // declare name as string and set required
  name: { type: String, required: true },
  price: Number,
  // declare type as string and set required, default values needed
  type: { type: String, required: true, enum: ['Service', 'Part', 'Labor'] }
});

// declare the mongoose technician schema
const technicianSchema = new mongoose.Schema({
  // declare the name as string and set required
  name: { type: String, required: true },
  emailAddress: String
});

// declare the mongoose order item schema
const orderItemSchema = new mongoose.Schema({
  quantity: Number,
  itemTotal: Number,
  // declare the item as a priceBookItem and set required
  item: { type: priceBookItemSchema, required: true },
  technician: [technicianSchema]
});

// declare the mongoose order schema
const orderSchema = new mongoose.Schema({
  // declare the orderDate as Date and set default to now
  orderDate: { type: Date, default: Date.now },
  orderCompleted: Date,
  total: Number,
  invoiceDate: Date,
  invoicePaidDate: Date,
  items: [orderItemSchema]
});

// declare the mongoose phone number schema
const phoneNumberSchema = new mongoose.Schema({
  // declare the phoneNumber as string and set required
  phoneNumber: { type: String, required: true },
  type: String,
  extension: String,
  // declare isPrimary as boolean and set default
  isPrimary: { type: Boolean, default: false }
});

// declare the mongoose email address schema
const emailAddressSchema = new mongoose.Schema({
  // declare the emailAddress as string and set required
  emailAddress: { type: String, required: true },
  // declare isPrimary as boolean and set default
  isPrimary: { type: Boolean, default: false }
});

// declare the mongoose contact schema
const contactSchema = new mongoose.Schema({
  // declare the firstName as string and set required
  firstName: { type: String, required: true },
  // declare the lastName as string and set required
  lastName: { type: String, required: true },
  // declare isPrimary as boolean and set default
  isPrimary: { type: Boolean, default: false },
  user: userSchema,
  orders: [orderSchema],
  phoneNumbers: [phoneNumberSchema],
  emails: [emailAddressSchema]
});

// declare the mongoose customer account schema
const customerAccountSchema = new mongoose.Schema({
  // declare the name as string and set required
  name: { type: String, required: true },
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  postalCode: String,
  contacts: [contactSchema]
});

// declare the mongoose model, setting it to the proper collection
const customerAccountModel = mongoose.model<CustomerAccount>('CustomerAccountModel', customerAccountSchema, 'accounts');
// export the model
export = customerAccountModel;






