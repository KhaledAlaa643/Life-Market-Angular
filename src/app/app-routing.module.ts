import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { MyaccountComponent } from './component/myaccount/myaccount.component';
import { OrdersComponent } from './component/orders/orders.component';
import { SavedItemsComponent } from './component/saved-items/saved-items.component';
import { AddressComponent } from './component/address/address.component';
import { ManageAccountComponent } from './component/manage-account/manage-account.component';


const routes:Routes=[
    {path:"",redirectTo:"register",pathMatch:'full'},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'profile',component:ProfileComponent,
    children:[
    {path:'',component:MyaccountComponent},
    {path:'myaccount',component:MyaccountComponent},
    {path:'order',component:OrdersComponent},
    {path:'saveditems',component:SavedItemsComponent},
    {path:'address',component:AddressComponent},
    {path:'manage',component:ManageAccountComponent}

    ]},
  
]; 

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
  
})


export class AppRoutingModule { 
  
  
}
