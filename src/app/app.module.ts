import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { HeaderComponent } from './Components/header/header.component'
import { FooterComponent } from './Components/footer/footer.component'
import { NotFoundComponent } from './Components/errors/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsListByCategoryComponent } from './Components/products-list-by-category/products-list-by-category.component';
import { ProductsSearchComponent } from './Components/products-search/products-search.component';
import { FavItemComponent } from './Components/fav-item/fav-item.component';
import { CartComponent } from './Components/cart/cart.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RequestPasswordResetComponent } from './component/request-password-reset/request-password-reset.component';
import { ProfileComponent } from './component/profile/profile.component';
import { MyaccountComponent } from './component/myaccount/myaccount.component';
import { OrdersComponent } from './component/orders/orders.component';
import { SavedItemsComponent } from './component/saved-items/saved-items.component';
import { ManageAccountComponent } from './component/manage-account/manage-account.component';
import { AddressComponent } from './component/address/address.component';
import { UpdateAddressComponent } from './component/update-address/update-address.component';
import { OrderComponent } from './Components/Dashboard/order/order.component';
import { MainDashboardComponent } from './Components/Dashboard/main-dashboard/main-dashboard.component';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { OffersComponent } from './Components/offers/offers.component';
import { ContactComponent } from './Components/Dashboard/contact/contact.component';
import { EditofferComponent } from './Components/editoffer/editoffer.component';
import { AddofferComponent } from './Components/addoffer/addoffer.component';
import { AddofersproductComponent } from './Components/addofersproduct/addofersproduct.component';
import { ProductsManagementComponent } from './Components/Dashboard/products-management/products-management.component';
import { CategoriesManagementComponent } from './Components/Dashboard/categories-management/categories-management.component';
import { SubCategoriesManagementComponent } from './Components/Dashboard/sub-categories-management/sub-categories-management.component';
import { CategoryUpdateComponent } from './Components/Dashboard/category-update/category-update.component';
import { CreateCategoryComponent } from './Components/Dashboard/create-category/create-category.component';
import { CreateSubCategoryComponent } from './Components/Dashboard/create-sub-category/create-sub-category.component';
import { SubCategoryUpdateComponent } from './Components/Dashboard/sub-category-update/sub-category-update.component';
import { ProductUpdateComponent } from './Components/Dashboard/product-update/product-update.component';
import { CreateProductComponent } from './Components/Dashboard/create-product/create-product.component';
import { NotificationComponent } from './component/notification/notification.component';
// import { AuthGuard } from './guards/auth.guard';
import { CloseComponent } from './close/close.component';
import { CustomersComponent } from './Dashbord/Customers/Main Customers/customers.component';
import { AdminsComponent } from './Dashbord/Admins/admins/Main Admin/admins.component';
import { DeliveryComponent } from './Dashbord/Delivery/delivery/Main Delivery/delivery.component';
import { EditAdminComponent } from './Dashbord/Admins/admins/edit-admin/edit-admin.component';
import { AddAdminComponent } from './Dashbord/Admins/admins/add-admin/add-admin.component';
import { EditCustomerComponent } from './Dashbord/Customers/Edit Customer/edit-customer/edit-customer.component';
import { AddCustomerComponent } from './Dashbord/Customers/Add Customer/add-customer/add-customer.component';
import { EditDeliveryComponent } from './Dashbord/Delivery/delivery/Edit Delivery/edit-delivery/edit-delivery.component';
import { AddDeliveryComponent } from './Dashbord/Delivery/delivery/Add Delivery/add-delivery/add-delivery.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';

@NgModule({
  declarations: [


    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    ProductsListComponent,
    ProductsListByCategoryComponent,
    ProductsSearchComponent,
    FavItemComponent,
    CartComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductDetailsComponent,
    ProductsComponent,
    RegisterComponent,
    LoginComponent,
    RequestPasswordResetComponent,
    ProfileComponent,
    MyaccountComponent,
    OrdersComponent,
    SavedItemsComponent,
    ManageAccountComponent,
    AddressComponent,
    UpdateAddressComponent,
    OrderComponent,
    MainDashboardComponent,
    DashboardComponent,
    OffersComponent,
    ContactComponent,
    // OffersComponent,
    EditofferComponent,
    AddofferComponent,
    AddofersproductComponent,
    ProductsManagementComponent,
    CategoriesManagementComponent,
    SubCategoriesManagementComponent,
    CategoryUpdateComponent,
    CreateCategoryComponent,
    CreateSubCategoryComponent,
    SubCategoryUpdateComponent,
    ProductUpdateComponent,
    CreateProductComponent,
    NotificationComponent,
    
    // AuthGuard,
    CloseComponent,
    CustomersComponent,
    AdminsComponent,
    DeliveryComponent,
    EditAdminComponent,
    AddAdminComponent,
    EditCustomerComponent,
    AddCustomerComponent,
    EditDeliveryComponent,
    AddDeliveryComponent,
    CheckOutComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // FormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],

  providers: [{
      provide :HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
