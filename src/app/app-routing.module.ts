import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { FavItemComponent } from './Components/fav-item/fav-item.component';



const routes: Routes = [
  {path: '', redirectTo:"/main/home", pathMatch:"full"},
  {path: 'main', component:MainLayoutComponent, children: [
    {path: 'home', component:HomeComponent},
    {path: 'products/list/:id', component:ProductsListComponent},
    {path: 'products/list/category/:id', component:ProductsListByCategoryComponent},
    
    {path: 'product/:id', component:ProductDetailsComponent},
    {path: 'cart', component:CartComponent},
    {path: 'about', component:AboutUsComponent},
    {path: 'contact', component:ContactUsComponent},
    {path: 'products', component:ProductsComponent},
    {path: 'wishlist', component:FavItemComponent},

  ]},
  {path: '**', component:NotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
