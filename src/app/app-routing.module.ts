import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/errors/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductsListByCategoryComponent } from './Components/products-list-by-category/products-list-by-category.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ProductsComponent } from './Components/products/products.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './component/profile/profile.component';
import { MyaccountComponent } from './component/myaccount/myaccount.component';
import { OrdersComponent } from './component/orders/orders.component';
import { SavedItemsComponent } from './component/saved-items/saved-items.component';
import { AddressComponent } from './component/address/address.component';
import { ManageAccountComponent } from './component/manage-account/manage-account.component';
import { UpdateAddressComponent } from './component/update-address/update-address.component';
import { OrderComponent } from './Components/Dashboard/order/order.component';
import { MainDashboardComponent } from './Components/Dashboard/main-dashboard/main-dashboard.component';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { OffersComponent } from './Components/offers/offers.component';
import { ContactComponent } from './Components/Dashboard/contact/contact.component';
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
import { EditofferComponent } from './Components/editoffer/editoffer.component';
import { AddofferComponent } from './Components/addoffer/addoffer.component';
import { AddofersproductComponent } from './Components/addofersproduct/addofersproduct.component';
import { ProductsManagementComponent } from './Components/Dashboard/products-management/products-management.component';
import { CategoriesManagementComponent } from './Components/Dashboard/categories-management/categories-management.component';
import { CategoryUpdateComponent } from './Components/Dashboard/category-update/category-update.component';
import { CreateCategoryComponent } from './Components/Dashboard/create-category/create-category.component';
import { SubCategoriesManagementComponent } from './Components/Dashboard/sub-categories-management/sub-categories-management.component';
import { SubCategoryUpdateComponent } from './Components/Dashboard/sub-category-update/sub-category-update.component';
import { CreateSubCategoryComponent } from './Components/Dashboard/create-sub-category/create-sub-category.component';
import { ProductUpdateComponent } from './Components/Dashboard/product-update/product-update.component';
import { CreateProductComponent } from './Components/Dashboard/create-product/create-product.component';
import { NotificationComponent } from './component/notification/notification.component';
import { PreviousOrderComponent } from './component/previous-order/previous-order.component';
import { GalleryManagementComponent } from './Components/Dashboard/gallery-management/gallery-management.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { ProductRatingComponent } from './component/product-rating/product-rating.component';
import { TrackOrderComponent } from './component/track-order/track-order.component';
import { ForgetPasswordComponentComponent } from './component/forget-password-component/forget-password-component.component';
import { ResetPasswordComponentComponent } from './component/reset-password-component/reset-password-component.component';
import { NewPasswordComponentComponent } from './component/new-password-component/new-password-component.component';


const routes: Routes = [

  { path: '', redirectTo: "/main/home", pathMatch: "full" },

  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forget',component:ForgetPasswordComponentComponent},
  {path:'reset',component:ResetPasswordComponentComponent},
  {path:'password',component:NewPasswordComponentComponent},
  
  {path: 'main', component:MainLayoutComponent, children: [
    {path: 'home', component:HomeComponent},
    {path: 'products/list/:id', component:ProductsListComponent},
    {path: 'products/list/category/:id', component:ProductsListByCategoryComponent},
    {path: 'product/:id', component:ProductDetailsComponent},
    {path: 'cart', component:CartComponent, canActivate:[AuthGuard]},
    {path: 'product', component:ProductDetailsComponent},
    {path: 'getcartprd', component:CartComponent},
    {path: 'about', component:AboutUsComponent},
    {path: 'contact', component:ContactUsComponent},
    {path: 'products', component:ProductsComponent},
    {path: 'payment', component:PaymentComponent, canActivate:[AuthGuard]},

    {path:'profile',component:ProfileComponent, canActivate:[AuthGuard], children:[
      {path:'myaccount',component:MyaccountComponent},
      {path:'order',component:OrdersComponent},
      {path:'previousorder',component:PreviousOrderComponent},
      {path:'productRating/:id',component:ProductRatingComponent},
      {path:'trackorder/:id',component:TrackOrderComponent},
      {path:'saveditems',component:SavedItemsComponent},
      {path:'address',component:AddressComponent},
      {path:'manage',component:ManageAccountComponent},
      {path:'updateaddress',component:UpdateAddressComponent},
      {path:'notify', component: NotificationComponent }
    ]},

    {path: 'cart/check', component:CheckOutComponent},
    {path: 'cart', component:CartComponent},

    {path: '**', component:NotFoundComponent}
  ]},

  {path: 'admin', component:MainDashboardComponent,canActivate:[AuthGuard], children: [

    {path: 'dashboard', component:DashboardComponent},

    {path: 'contact', component:ContactComponent},

    {path: 'orders',component:OrderComponent},

    {path: 'admin', component:AdminsComponent},
    {path: 'admin/add', component:AddAdminComponent},
    {path: 'admin/edit/:id', component:EditAdminComponent},

    {path: 'customer', component:CustomersComponent},
    {path: 'customer/add', component:AddCustomerComponent},
    {path: 'customer/edit/:id', component:EditCustomerComponent},

    {path: 'delivery', component:DeliveryComponent},
    {path: 'delivery/add', component:AddDeliveryComponent},
    {path: 'delivery/edit/:id', component:EditDeliveryComponent},

    {path: 'offers',component:OffersComponent},
    {path: 'offers/edit/:id',component:EditofferComponent},
    {path: 'offer/addoffer',component:AddofferComponent},
    {path: 'addproduct/offer/:id',component:AddofersproductComponent},

    {path:'products-management',component:ProductsManagementComponent},
    {path:'create-product',component:CreateProductComponent},
    {path:'update-product/:id',component:ProductUpdateComponent},

    {path:'categories-management',component:CategoriesManagementComponent},
    {path:'update-category/:id',component:CategoryUpdateComponent},
    {path:'create-category',component:CreateCategoryComponent},

    {path:'sub-categories-management',component:SubCategoriesManagementComponent},
    {path:'update-sub-category/:id',component:SubCategoryUpdateComponent},
    {path:'create-sub-category',component:CreateSubCategoryComponent},

    {path:'gallery-management/:id',component:GalleryManagementComponent},


    {path: '**', component:NotFoundComponent}
  ]},


];




@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]

})


export class AppRoutingModule {


}
