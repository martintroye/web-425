import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderServicesDialogComponent } from './order-services-dialog/order-services-dialog.component';

@Component({
  selector: 'app-order-services',
  templateUrl: './order-services.component.html',
  styleUrls: ['./order-services.component.scss']
})
export class OrderServicesComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  orderNow() {
    const dialogRef = this.dialog.open(OrderServicesDialogComponent, {
      width: '40%',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
