import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category, SubCategory } from '../Models/category';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryiesService {

  constructor(private _httpClient:HttpClient) { }

  getAllCategorys():Observable<Category[]>{
    return this._httpClient.get<Category[]>(`${environment.apiURL}/categories`)
  }

  getSubCategorysByCatId(id:any):Observable<SubCategory[]>{
    return this._httpClient.get<SubCategory[]>(`${environment.apiURL}/categories/${id}`)
  }

  getAllSubCategorys():Observable<SubCategory[]>{
    return this._httpClient.get<SubCategory[]>(`${environment.apiURL}/sub_categories`)
  }
}
