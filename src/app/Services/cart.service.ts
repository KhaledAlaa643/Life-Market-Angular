import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private _httpClient:HttpClient
    ) { }

  getCarts():Observable<Product[]>{
    return this._httpClient.get<Product[]>(`${environment.apiURL}/shoppingcart`)
  }
  deleteCart(prdId:number):Observable<Product>{
    return this._httpClient.delete<Product>(`${environment.apiURL}/shoppingcart/${prdId}`)
  }
}
