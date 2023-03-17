import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Product } from '../Models/product';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient:HttpClient) { }

  getTopSellingProducts():Observable<Product[]>{
    return this._httpClient.get<Product[]>(`${environment.apiURL}/topselling/products`)
  }

  getTopRatingProducts():Observable<Product[]>{
    return this._httpClient.get<Product[]>(`${environment.apiURL}/toprating/products`)
  }


  getProductsByCatId(id:any):Observable<Product[]>{
    return this._httpClient.get<Product[]>(`${environment.apiURL}/category/products/${id}`)
  }


  getProductsBySubCatId(id:any):Observable<Product[]>{
    return this._httpClient.get<Product[]>(`${environment.apiURL}/sub_categories/${id}`)
  }


  getProductsByOfferId(id:any):Observable<Product[]>{
    return this._httpClient.get<Product[]>(`${environment.apiURL}/offers_products/${id}`)
  }


  // getProductsBySearch(id:any):Observable<Product[]>{
  //   // return this._httpClient.post<Product[]>(`${environment.apiURL}/search`)
  //   return this._httpClient.post<Product>(
  //     `${environment.apiURL}/products/`,
  //     newPrd,
  //     {
  //       headers:new HttpHeaders({
  //         'accept':"application/json"
  //       })
  //     }
  //   ).pipe(retry(2));
    
  // }


}
