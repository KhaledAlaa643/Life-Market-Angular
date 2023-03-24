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
import { FavItemComponent } from './Components/fav-item/fav-item.component';
import { AuthGuard } from './guards/auth.guard';
import { RequestPasswordResetComponent } from './component/request-password-reset/request-password-reset.component';
import { ProfileComponent } from './component/profile/profile.component';
import { MyaccountComponent } from './component/myaccount/myaccount.component';
import { OrdersComponent } from './component/orders/orders.component';
import { SavedItemsComponent } from './component/saved-items/saved-items.component';
import { AddressComponent } from './component/address/address.component';
import { ManageAccountComponent } from './component/manage-account/manage-account.component';
import { UpdateAddressComponent } from './component/update-address/update-address.component';
import { ProductsManagementComponent } from './Components/Dashboard/products-management/products-management.component';
import { CategoriesManagementComponent } from './Components/Dashboard/categories-management/categories-management.component';
import { CategoryUpdateComponent } from './Components/Dashboard/category-update/category-update.component';
import { CreateCategoryComponent } from './Components/Dashboard/create-category/create-category.component';
import { SubCategoriesManagementComponent } from './Components/Dashboard/sub-categories-management/sub-categories-management.component';
import { SubCategoryUpdateComponent } from './Components/Dashboard/sub-category-update/sub-category-update.component';
import { CreateSubCategoryComponent } from './Components/Dashboard/create-sub-category/create-sub-category.component';
import { ProductUpdateComponent } from './Components/Dashboard/product-update/product-update.component';
import { CreateProductComponent } from './Components/Dashboard/create-product/create-product.component';

const routes: Routes = [

  {path: '', redirectTo:"/main/home", pathMatch:"full"},

  {path: 'main', component:MainLayoutComponent, children: [
    {path: 'home', component:HomeComponent},
    {path: 'products/list/:id', component:ProductsListComponent},
    {path: 'products/list/category/:id', component:ProductsListByCategoryComponent},
    {path: 'product/:id', component:ProductDetailsComponent},
    {path: 'cart', component:CartComponent, canActivate:[AuthGuard]},
    {path: 'about', component:AboutUsComponent},
    {path: 'contact', component:ContactUsComponent},
    {path: 'products', component:ProductsComponent},
    {path: 'wishlist', component:FavItemComponent},

    {path:'profile',component:ProfileComponent, canActivate:[AuthGuard], children:[
      {path:'myaccount',component:MyaccountComponent},
      {path:'order',component:OrdersComponent},
      {path:'saveditems',component:SavedItemsComponent},
      {path:'address',component:AddressComponent},
      {path:'manage',component:ManageAccountComponent},
      {path:'updateaddress',component:UpdateAddressComponent}
    ]},

    {path: '**', component:NotFoundComponent}
  ]},

  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'reset-Password-Request',component:RequestPasswordResetComponent},

  // dashboard

  //products
  {path:'dashboard/products-management',component:ProductsManagementComponent},
  {path:'create-product',component:CreateProductComponent},
  {path:'update-product/:id',component:ProductUpdateComponent},
  //category

  {path:'dashboard/categories-management',component:CategoriesManagementComponent},
  {path:'update-category/:id',component:CategoryUpdateComponent},
  {path:'create-category',component:CreateCategoryComponent},

  //subcategory
  {path:'dashboard/sub-categories-management',component:SubCategoriesManagementComponent},
  {path:'update-sub-category/:id',component:SubCategoryUpdateComponent},
  {path:'create-sub-category',component:CreateSubCategoryComponent}



];




@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]

})


export class AppRoutingModule {


}
