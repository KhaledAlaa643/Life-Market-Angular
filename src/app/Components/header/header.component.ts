import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  product!:any;
  searchInput:any;

  constructor(
    public httpclient: HttpClient,
    private router:Router,
    private _productServ: ProductsService
  ) {}

  goToPrdList(_type:any, id:any){
    this.router.navigate(['main/products/list', id], { queryParams: { type: _type, searchText: this.searchInput} });

  }

  // searchProduct(){
  //   this._productServ.getProductsBySearch(this.searchInput).subscribe({
  //     next: (res) => {
  //      this.product=res;

  //     }
  //   });

  // }

}
