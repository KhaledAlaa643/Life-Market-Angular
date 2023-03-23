import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/errors/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ProductsComponent } from './Components/products/products.component';
import { FavItemComponent } from './Components/fav-item/fav-item.component';
import { CustomersComponent } from './Dashbord/Customers/Main Customers/customers.component';
import { DeliveryComponent } from './Dashbord/Delivery/delivery/Main Delivery/delivery.component';
import { AdminsComponent } from './Dashbord/Admins/admins/Main Admin/admins.component';
import { EditAdminComponent } from './Dashbord/Admins/admins/edit-admin/edit-admin.component';
import { AddAdminComponent } from './Dashbord/Admins/admins/add-admin/add-admin.component';
import { EditCustomerComponent } from './Dashbord/Customers/Edit Customer/edit-customer/edit-customer.component';
import { AddCustomerComponent } from './Dashbord/Customers/Add Customer/add-customer/add-customer.component';
import { EditDeliveryComponent } from './Dashbord/Delivery/delivery/Edit Delivery/edit-delivery/edit-delivery.component';
import { AddDeliveryComponent } from './Dashbord/Delivery/delivery/Add Delivery/add-delivery/add-delivery.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';



const routes: Routes = [
  {path: '', redirectTo:"/main", pathMatch:"full"},
  {path: 'main', component:MainLayoutComponent, children: [
    {path: 'home', component:HomeComponent},
    {path: 'product', component:ProductDetailsComponent},
    {path: 'getcartprd', component:CartComponent},
    {path: 'about', component:AboutUsComponent},
    {path: 'contact', component:ContactUsComponent},
    {path: 'products', component:ProductsComponent},
    {path: 'wishlist', component:FavItemComponent},
    {path: 'cart/check', component:CheckOutComponent},
    {path: 'cart', component:CartComponent},

    {path: '**', component:NotFoundComponent}

  ]},
    {path: 'admin', component:AdminsComponent},
    {path: 'admin/add', component:AddAdminComponent},
    {path: 'admin/edit/:id', component:EditAdminComponent},
    {path: 'customer', component:CustomersComponent},
    {path: 'customer/add', component:AddCustomerComponent},
    {path: 'customer/edit/:id', component:EditCustomerComponent},
    {path: 'delivery', component:DeliveryComponent},
    {path: 'delivery/add', component:AddDeliveryComponent},
    {path: 'delivery/edit/:id', component:EditDeliveryComponent},
    {path: '**', component:NotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
