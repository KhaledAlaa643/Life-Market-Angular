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
  
}
