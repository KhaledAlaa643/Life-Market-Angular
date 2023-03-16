import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './component/profile/profile.component';
import { MyaccountComponent } from './component/myaccount/myaccount.component';
import { OrdersComponent } from './component/orders/orders.component';
import { SavedItemsComponent } from './component/saved-items/saved-items.component';
import { ManageAccountComponent } from './component/manage-account/manage-account.component';
import { AddressComponent } from './component/address/address.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    MyaccountComponent,
    OrdersComponent,
    SavedItemsComponent,
    ManageAccountComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
