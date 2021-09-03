import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfooditemComponent } from './components/addfooditem/addfooditem.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { CartdetailsComponent } from './components/cartdetails/cartdetails.component';
import { ChangepwdComponent } from './components/changepwd/changepwd.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ListfooditemsComponent } from './components/listfooditems/listfooditems.component';
import { OrdermsgdisplayComponent } from './components/ordermsgdisplay/ordermsgdisplay.component';
import { RemovefooditemComponent } from './components/removefooditem/removefooditem.component';

const routes: Routes = [
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'adminDashboard',component:AdminDashboardComponent,
  children:[
    {path:'addfooditem',component:AddfooditemComponent},
    {path:'listfooditem',component:ListfooditemsComponent},
    {path:'removefooditem',component:RemovefooditemComponent},
    {path:'changepwd',component:ChangepwdComponent}
  ]},
  
  {path:'home',component:HomeComponent},
  {path:'cartdetails',component:CartdetailsComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'ordermsg',component:OrdermsgdisplayComponent},
  {path:'',redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
