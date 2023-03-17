import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { HeaderComponent } from './Components/header/header.component'
import { FooterComponent } from './Components/footer/footer.component'
import { NotFoundComponent } from './Components/errors/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { ProductsListByCategoryComponent } from './Components/products-list-by-category/products-list-by-category.component';
import { ProductsSearchComponent } from './Components/products-search/products-search.component';
import { FavItemComponent } from './Components/fav-item/fav-item.component';
import { CartComponent } from './Components/cart/cart.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
