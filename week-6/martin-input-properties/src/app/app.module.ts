import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [AppComponent, OrderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  // export the modules for use in our components
  exports: [MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
