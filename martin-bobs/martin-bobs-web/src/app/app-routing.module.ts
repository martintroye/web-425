import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderServicesComponent } from './order-services/order-services.component';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'order', component: OrderServicesComponent},
  {path: 'summary', component: InvoiceSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
