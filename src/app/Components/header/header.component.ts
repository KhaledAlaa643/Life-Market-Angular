import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductsService } from 'src/app/Services/products.service';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  product!:any;
  searchInput:any;
  isLoggedout: boolean = true;
  userName!:any;
  cart:number = 0;


  constructor(
    public httpclient: HttpClient,
    private router:Router,
    private _productServ: ProductsService,
    private _authServ:AuthServiceService,
    private _userServ:UserService,
    private _cartServ:CartService

  ) {}


  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');

    if(this._authServ.isLoggedIn()!=null){
      this.isLoggedout = false;
    }
    else{
      this.isLoggedout = true;

    }

    this._cartServ.getCarts().subscribe({
      next: (res) => {

          this.cart = res.length;
      
      }
    });



  }


  logoutFun(){
    this._userServ.logout().subscribe({
      next:(res)=>{
      //  console.log(res)
       localStorage.removeItem('token');
       localStorage.removeItem('userId');
       localStorage.removeItem('userName');
       this.router.navigate(['/login'])
      },
      error:(err:any)=>{
        console.log(err.error)
      }
    })
  }


  goToPrdList(_type:any, id:any){
    this.router.navigate(['main/products/list', id], { queryParams: { type: _type, searchText: this.searchInput} });

  }


}
