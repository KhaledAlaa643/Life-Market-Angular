import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Cart } from '../Models/cart';
import { BehaviorSubject, Observable, retry } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalPrice: BehaviorSubject<number> = new BehaviorSubject<number>(0);

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


  getFavPrd(id:any):Observable<any>{
    return this._httpClient.get<any>(`${environment.apiURL}/fav/${id}`)
  }

  addPrdToFav(id:any, p=null):Observable<any>{
    return this._httpClient.post<any>(`${environment.apiURL}/fav_item/${id}`,p)
  }

  getCarts():Observable<any[]>{
    return this._httpClient.get<any[]>(`${environment.apiURL}/cartprd`)
  }

  deleteCart(prdId:number):Observable<any>{
    return this._httpClient.delete<any>(`${environment.apiURL}/delprdfromcart/${prdId}`)
  }

  incrementPrdInCart(prdId:any):Observable<any>{
    return this._httpClient.get<any>(`${environment.apiURL}/increment/shoppingcart/${prdId}`)
  }

  decrementPrdInCart(prdId:any):Observable<any>{
    return this._httpClient.get<any>(`${environment.apiURL}/decrement/shoppingcart/${prdId}`)
  }

}
