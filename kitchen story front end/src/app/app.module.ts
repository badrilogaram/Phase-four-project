import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { FoodmenuComponent } from './components/foodmenu/foodmenu.component';
import { HomeComponent } from './components/home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddfooditemComponent } from './components/addfooditem/addfooditem.component';
import { ListfooditemsComponent } from './components/listfooditems/listfooditems.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RemovefooditemComponent } from './components/removefooditem/removefooditem.component';
import { ChangepwdComponent } from './components/changepwd/changepwd.component';
import { CartdetailsComponent } from './components/cartdetails/cartdetails.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FoodserviceService } from './services/foodservice.service';
import { CommonService } from './services/common.service';
import { CheckoutService } from './services/checkout.service';
import { OrdermsgdisplayComponent } from './components/ordermsgdisplay/ordermsgdisplay.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    FoodmenuComponent,
    HomeComponent,
    AddfooditemComponent,
    ListfooditemsComponent,
    RemovefooditemComponent,
    ChangepwdComponent,
    CartdetailsComponent,
    CheckoutComponent,
    OrdermsgdisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [AuthService,FoodserviceService,CommonService,CheckoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
