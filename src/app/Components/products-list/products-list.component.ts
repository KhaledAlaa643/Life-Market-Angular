import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCategory } from 'src/app/Models/category';
import { Product } from 'src/app/Models/product';
import { CategoryiesService } from 'src/app/Services/categoryies.service';
import { OffersService } from 'src/app/Services/offers.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnChanges, OnInit {

  prd:Product[] = [];
  subCat:SubCategory[] = [];
  listType:any;
  listId:any;
  @Input() sentCatId:string = '0';
  selectedCatId:string = '0';
  isfull:any = 0;

  constructor(
    private _categoryServ: CategoryiesService,
    private _productServ: ProductsService,
    private _offerServ: OffersService,    
    public httpclient: HttpClient,
    private activatRoute:ActivatedRoute, 
    private router:Router,
  ){}

  
  ngOnInit(): void {
    this.listId = String(this.activatRoute.snapshot.paramMap.get('id'));
    this.listType = String(this.activatRoute.snapshot.queryParamMap.get('type'));
    if(this.listType == "cat"){
      this._productServ.getProductsByCatId(this.listId).subscribe({
        next: (res) => {
          this.prd = res;
          if(this.prd[0].name){
            this.isfull=1;
          }
          else{
            this.isfull=-1;
          }
          // console.log(res);
        }
      });
    }
    else if(this.listType == "dealsOffer"){
      this._productServ.getProductsByOfferId(this.listId).subscribe({
        next: (res) => {
          this.prd = res;
          // console.log(res);
          if(this.prd[0].name){
            this.isfull=1;
          }
          else{
            this.isfull=-1;
          }
          
        }
      });
    }
    else if(this.listType == "giftsOffer"){
      this._productServ.getProductsByOfferId(this.listId).subscribe({
        next: (res) => {
          this.prd = res;
          if(this.prd[0].name){
            this.isfull=1;
          }
          else{
            this.isfull=-1;
          }
        }
      });
    }
    else if(this.listType == "dailyOffer"){
      this._productServ.getProductsByOfferId(this.listId).subscribe({
        next: (res) => {
          this.prd = res;
          if(this.prd[0].name){
            this.isfull=1;
          }
          else{
            this.isfull=-1;
          }
        }
      });
    }
    else if(this.listType == "topSelling"){
      this._productServ.getTopRatingProducts().subscribe({
        next: (res) => {
          this.prd = res;
          if(this.prd[0].name){
            this.isfull=1;
          }
          else{
            this.isfull=-1;
          }
        }
      });
    }
    else if(this.listType == "topRating"){
      this._productServ.getTopRatingProducts().subscribe({
        next: (res) => {
          this.prd = res;
          if(this.prd[0].name){
            this.isfull=1;
          }
          else{
            this.isfull=-1;
          }
        }
      });
    }
    else if(this.listType == "search"){
      this._productServ.getProductsBySearch(this.listId).subscribe({
        next: (res) => {
          this.prd = res;
          // console.log(this.listId);
          if(this.prd[0].name){
            this.isfull=1;
          }
          else{
            this.isfull=-1;
          }
        }
      });
    }
  }



  ngOnChanges(changes: SimpleChanges): void {
    if(this.sentCatId=='0'){
      this._productServ.getProductsByCatId(this.listId).subscribe({
        next:(res)=>{
          this.prd = res;
          // console.log(res);
          if(this.prd[0].name){
            this.isfull=1;
          }
          else{
            this.isfull=-1;
          }
        }
      });
    }
    else{
      this._productServ.getProductsBySubCatId(this.sentCatId).subscribe({
        next: (res)=>{
          this.prd = res;
          // console.log(res);
          if(this.prd[0].name){
            this.isfull=1;
          }
          else{
            this.isfull=-1;
          }
          
        }
      });
    }

  }


  goToPrdDetails(id:any){
    this.router.navigate(['main/product/', id]);
  }


  trackByFun(index:number, prd:Product){
    return prd.id;
  }
}
