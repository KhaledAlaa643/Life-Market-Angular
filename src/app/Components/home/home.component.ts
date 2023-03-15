import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
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


  constructor(
    private _categoryServ: CategoryiesService,
    private _productServ: ProductsService,
    private _offerServ: OffersService,    
    public httpclient: HttpClient,
  ) {}


  ngOnInit(): void {
    this._categoryServ.getAllCategorys().subscribe({
      next: (res) => {
        this.cat = res;
        console.log(res);

      }
    });
    this._productServ.getTopSellingProducts().subscribe({
      next: (res) => {
        this.topSellingProducts = res;
        this.topSelling[0] = this.topSellingProducts[0];
        this.topSelling[1] = this.topSellingProducts[1];
        this.topSelling[2] = this.topSellingProducts[2];
        this.topSelling[3] = this.topSellingProducts[3];
        this.topSelling[4] = this.topSellingProducts[4];
        this.topSelling[5] = this.topSellingProducts[5];
        console.log(res);

      }
    });
    this._productServ.getTopRatingProducts().subscribe({
      next: (res) => {
        this.topRatingProducts = res;
        this.topRating[0] = this.topRatingProducts[0];
        this.topRating[1] = this.topRatingProducts[1];
        this.topRating[2] = this.topRatingProducts[2];
        this.topRating[3] = this.topRatingProducts[3];
        this.topRating[4] = this.topRatingProducts[4];
        this.topRating[5] = this.topRatingProducts[5];
        console.log(this.topSelling);

      }
    });
    this._offerServ.getOffer("deals").subscribe({
      next: (res) => {
        this.dealsOffer = res;
        console.log(res);

      }
    });
    this._offerServ.getOffer("gifts").subscribe({
      next: (res) => {
        this.giftsOffer = res;
        console.log(res);

      }
    });
    this._offerServ.getOffer("daily").subscribe({
      next: (res) => {
        this.dailyOffer = res;
        console.log(res);

      }
    });
  }


}
