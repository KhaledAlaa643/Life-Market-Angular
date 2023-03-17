import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubCategory } from 'src/app/Models/category';
import { Product } from 'src/app/Models/product';
import { CategoryiesService } from 'src/app/Services/categoryies.service';
import { OffersService } from 'src/app/Services/offers.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products-list-by-category',
  templateUrl: './products-list-by-category.component.html',
  styleUrls: ['./products-list-by-category.component.css']
})
export class ProductsListByCategoryComponent implements OnInit {

  prd: Product[] = [];
  subCat: SubCategory[] = [];
  listType:any;
  listId:any;
  selectedCatId:string = '0';



  constructor(
    private _categoryServ: CategoryiesService,
    private _productServ: ProductsService,
    private _offerServ: OffersService,
    public httpclient: HttpClient,
    private activatRoute:ActivatedRoute,
  ){}

  


  ngOnInit(): void {
    this.listId = String(this.activatRoute.snapshot.paramMap.get('id'));
    this.listType = String(this.activatRoute.snapshot.queryParamMap.get('type'));
    if(this.listType == "cat"){
      this._categoryServ.getSubCategorysByCatId(this.listId).subscribe({
        next: (res) => {
          this.subCat = res;
          // console.log(res);
          // console.log(this.listType);
        }
      });

    }
  }



  trackByFun(index:number, prd:Product){
    return prd.id;
  }

}
