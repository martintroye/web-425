/*
============================================
; Title: Bob's Computer Repair Shop
; Author: Troy Martin
; Date: 11/05/2019
; Modified By: Troy Martin
; Description: WEB425
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerOrderDialogComponent } from './customer-order-dialog/customer-order-dialog.component';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.scss']
})
export class CustomerOrderComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  orderNow() {
    const dialogRef = this.dialog.open(CustomerOrderDialogComponent, {
      width: '40%',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
