import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { CategoryiesService } from 'src/app/Services/categoryies.service';
import { OffersService } from 'src/app/Services/offers.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  prdByCatId: Product[] = [];

  constructor(
    private _categoryServ: CategoryiesService,
    private _productServ: ProductsService,
    private _offerServ: OffersService,    
    public httpclient: HttpClient,
  ){}

  
  ngOnInit(): void {
    this._productServ.getProductsByCatId(2).subscribe({
      next: (res) => {
        this.prdByCatId = res;
        console.log(res);
      }
    });
  }
}
