import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Product, Product_Photo, Product_Rating } from '../Models/product';
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


  getProductsId(id:any):Observable<Product[]>{
    return this._httpClient.get<Product[]>(`${environment.apiURL}/productdetails/${id}`)
  }


  getProductsPhoto(id:any):Observable<Product_Photo[]>{
    return this._httpClient.get<Product_Photo[]>(`${environment.apiURL}/gallrey/productdetails/${id}`)
  }


  getProductsRating(id:any):Observable<Product_Rating[]>{
    return this._httpClient.get<Product_Rating[]>(`${environment.apiURL}/review/productdetails/${id}`)
  }

  getProductsBySearch(name:any):Observable<Product[]>{
    return this._httpClient.get<Product[]>(`${environment.apiURL}/search/${name}`)
  }

  getAllProducts():Observable<Product[]>{
    return this._httpClient.get<Product[]>(`${environment.apiURL}/products`)
  }

  addRating(r:any):Observable<any>{
    return this._httpClient.post<any>(`${environment.apiURL}/rating`,r)
  }

  updateRating(prdId:any):Observable<any>{
    return this._httpClient.put<any>(`${environment.apiURL}/products/rate/${prdId}`,null)
  }

  getRating(prdId:any):Observable<any>{
    return this._httpClient.get<any>(`${environment.apiURL}/products/checkrate/${prdId}`)

  }

  getSimilarProducts(catId:any):Observable<any>{
    return this._httpClient.get<any>(`${environment.apiURL}/similar_products/productdetails/${catId}`)

  }

}
