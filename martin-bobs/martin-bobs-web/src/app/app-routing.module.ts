import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderEntryComponent } from './order-entry/order-entry.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'orderEntry', component: OrderEntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
