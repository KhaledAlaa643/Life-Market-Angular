import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Cart } from '../Models/cart';
import { Observable, retry } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _httpClient:HttpClient) { }

  addProductToCart(prd:Cart):Observable<Cart>{
    return this._httpClient.post<Cart>(
      `${environment.apiURL}/addprdtocart/`,
      prd,
      {
        headers:new HttpHeaders({
          'accept':"application/json"
        })
      }
    ).pipe(retry(2));
  }


  getCarts():Observable<any[]>{
    return this._httpClient.get<any[]>(`${environment.apiURL}/getcartprd`)
  }
  
  deleteCart(prdId:number):Observable<Product>{
    return this._httpClient.delete<Product>(`${environment.apiURL}/shoppingcart/${prdId}`)
  }
}
