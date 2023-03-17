import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  product:Product = {} as Product;
  searchInput:any;

  constructor(
    public httpclient: HttpClient,
    private router:Router,
  ) {}

  goToPrdList(_type:any, id:any){
    this.router.navigate(['main/products/list', id], { queryParams: { type: _type, searchText: this.searchInput} });
  }

  searchProduct(){

  }

}
