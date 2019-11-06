/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
// imports from the angular core module
import { Component, OnInit } from '@angular/core';
// imports from the angular material dialog module
import { MatDialog } from '@angular/material/dialog';
// import our custom dialog component
import { CustomerOrderDialogComponent } from './customer-order-dialog/customer-order-dialog.component';

// declare the component
@Component({
  // define the selector to output the component
  selector: 'app-customer-order',
  // define the HTML template for the component
  templateUrl: './customer-order.component.html',
  // define the CSS for the component
  styleUrls: ['./customer-order.component.scss']
})
// declare and export the component class
export class CustomerOrderComponent implements OnInit {

  /*
  ; Params: dialog: MatDialog
  ; Response: none
  ; Description: Default constructor
  */
  constructor(private dialog: MatDialog) {}

  /*
  ; Params: none
  ; Response: none
  ; Description: Initialize the component
  */
  ngOnInit() {}

  /*
  ; Params: none
  ; Response: none
  ; Description: Open the order dialog and start an order
  */
  orderNow() {
    // declare and create the material dialog using the customer order dialog component
    const dialogRef = this.dialog.open(CustomerOrderDialogComponent, {
      width: '40%',
      disableClose: true, // the user cannot click in the overlay to close
    });

    // subscribe to the after closed event
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
