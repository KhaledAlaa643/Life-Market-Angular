import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, Product_Photo, Product_Rating } from 'src/app/Models/product';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  prd: Product[] = [];
  prdPhoto: Product_Photo[] = [];
  prdRating: Product_Rating[] = [];
  prdId:any;
  photo:any;

  constructor(
    private _productServ: ProductsService,
    public httpclient: HttpClient,
    private router:Router,
    private activatRoute:ActivatedRoute, 
  ) {}


  ngOnInit(): void {
    this.prdId = String(this.activatRoute.snapshot.paramMap.get('id'));
    this._productServ.getProductsId(this.prdId).subscribe({
      next: (res) => {
        this.prd = res;
        this.photo=res[0].photo,
        console.log(this.prd);
      }
    });
    this._productServ.getProductsPhoto(this.prdId).subscribe({
      next: (res) => {
        this.prdPhoto = res;
        console.log(this.prdPhoto);
      }
    });
    this._productServ.getProductsRating(this.prdId).subscribe({
      next: (res) => {
        this.prdRating = res;
        console.log(this.prdRating);
      }
    });
  }

  changeImage(pic:any){
    this.photo = pic;
  }

}
