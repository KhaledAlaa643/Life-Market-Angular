import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';
import { Product, Product_Photo, Product_Rating } from 'src/app/Models/product';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prd: Product[] = [];
  prdPhoto: Product_Photo[] = [];
  prdRating: Product_Rating[] = [];
  prdId: any;
  photo: any;
  cart: Cart = {} as Cart;
  isLoggedIn: boolean = false;
  addBtn: boolean = false;
  isFav: boolean = false;
  x:boolean = false;
  y:boolean = false;

  constructor(
    private _productServ: ProductsService,
    public httpclient: HttpClient,
    private router: Router,
    private activatRoute: ActivatedRoute,
    private _cartServ: CartService,
    private _authServ: AuthServiceService,
  ) { }


  ngOnInit(): void {
    this.prdId = String(this.activatRoute.snapshot.paramMap.get('id'));
    this._productServ.getProductsId(this.prdId).subscribe({
      next: (res) => {
        this.prd = res;
        this.photo = res[0].photo;
        if(this.prd[0].quantity<1){
          this.y=true;
        }
        
      }
    });
    this._productServ.getProductsPhoto(this.prdId).subscribe({
      next: (res) => {
        this.prdPhoto = res;
        // console.log(this.prdPhoto);
      }
    });
    this._productServ.getProductsRating(this.prdId).subscribe({
      next: (res) => {
        this.prdRating = res;
        // console.log(this.prdRating);
      }
    });

    if (this._authServ.isLoggedIn() != null) {
      this.isLoggedIn = true;
    }

    this._cartServ.getCarts().subscribe({
      next: (res) => {
        // console.log(res);
        
        for (let i = 0; i < res.length; i++) {
          if (res[i].prd_id == this.prdId || this.y==true) {
            // console.log(res[i].prd_id);
            this.addBtn = false;
            this.x=true;
          }
          else{
            this.addBtn = true;
            this.x=false;
          }
        }
        this.addBtn = true;
        this.x=false;
      }
    });


    this._cartServ.getFavPrd(this.prdId).subscribe({
      next: (res) => {
        if (res > 0) {
          this.isFav = true;
        }
      }
    });
  }

  changeImage(pic: any) {
    this.photo = pic;
  }

  addPrdToCart() {
    if (this.isLoggedIn == true) {
      this.cart.quantity = 1;
      this.cart.price = this.prd[0].price;
      this.cart.prd_id = this.prdId;
      this._cartServ.addProductToCart(this.cart).subscribe({
        next: (res) => {
          // console.log(res);
          window.location.reload();
        }
      });
    }
    else {
      this.router.navigate(['/login']);
    }


  }

  addPrdToFav() {
    this._cartServ.addPrdToFav(this.prdId).subscribe({
      next: (res) => {
        // console.log(res);
        window.location.reload();
      }
    });

  }

}
