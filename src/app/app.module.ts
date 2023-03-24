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
// import { AuthGuard } from './guards/auth.guard';

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
    
    // AuthGuard,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
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
