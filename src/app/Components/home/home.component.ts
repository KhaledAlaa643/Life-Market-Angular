import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { Offers } from 'src/app/Models/offers';
import { Product } from 'src/app/Models/product';
import { CategoryiesService } from 'src/app/Services/categoryies.service';
import { OffersService } from 'src/app/Services/offers.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cat: Category[] = [];
  topSellingProducts: Product[] = [];
  topSelling: Product[] = [];
  topRatingProducts: Product[] = [];
  topRating: Product[] = [];
  dealsOffer: Offers[] = [];
  giftsOffer: Offers[] = [];
  dailyOffer: Offers[] = [];
  prdByCat1: Product[] = [];
  prd1: Product[] = [];
  prdByCat2: Product[] = [];
  prd2: Product[] = [];



  constructor(
    private _categoryServ: CategoryiesService,
    private _productServ: ProductsService,
    private _offerServ: OffersService,    
    public httpclient: HttpClient,
    private router:Router,
  ) {}


  ngOnInit(): void {
    this._categoryServ.getAllCategorys().subscribe({
      next: (res) => {
        this.cat = res;
        // console.log(res);

      }
    });
    this._productServ.getTopSellingProducts().subscribe({
      next: (res) => {
        this.topSellingProducts = res;
        for(let i=0;i<6;i++){
          this.topSelling[i] = this.topSellingProducts[i];
        }
        // console.log(res);
      }
    });
    this._productServ.getTopRatingProducts().subscribe({
      next: (res) => {
        this.topRatingProducts = res;
        for(let i=0;i<6;i++){
          this.topRating[i] = this.topRatingProducts[i];
        }
        // console.log(this.topSelling);
      }
    });
    this._offerServ.getOffer("deals").subscribe({
      next: (res) => {
        this.dealsOffer = res;
        // console.log(res);
      }
    });
    this._offerServ.getOffer("gifts").subscribe({
      next: (res) => {
        this.giftsOffer = res;
        // console.log(res);

      }
    });
    this._offerServ.getOffer("daily").subscribe({
      next: (res) => {
        this.dailyOffer = res;
        // console.log(res);

      }
    });
    this._productServ.getProductsByCatId(1).subscribe({
      next: (res) => {
        this.prdByCat1 = res;
        for(let i=0;i<6;i++){
          this.prd1[i] = this.prdByCat1[i];
        }
        // console.log(res);
      }
    });
    this._productServ.getProductsByCatId(2).subscribe({
      next: (res) => {
        this.prdByCat2 = res;
        for(let i=0;i<6;i++){
          this.prd2[i] = this.prdByCat2[i];
        }
        // console.log(res);
      }
    });
  }


  goToPrdList(_type:any, id:any){
    if(_type == "cat"){
      this.router.navigate(['main/products/list/category', id], { queryParams: { type: _type} });
    }
    else{
      this.router.navigate(['main/products/list', id], { queryParams: { type: _type} });
    }
  }


  goToPrdDetails(id:any){
    this.router.navigate(['main/product/', id]);
  }


}
