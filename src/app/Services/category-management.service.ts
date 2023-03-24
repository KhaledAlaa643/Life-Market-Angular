import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryManagementService {

  constructor(private httpservice: HttpClient) { }
  getCategories(): Observable<any>{
    return this.httpservice.get<any>('http://localhost:8000/api/dashboard/products/all-categories')

  }
  deleteCat(id:any): Observable<any>{
    return this.httpservice.delete<any>(`http://localhost:8000/api/dashboard/products/delete/category/${id}`)

  }
  updateCat(data:any): Observable<any>{
    return this.httpservice.post<any>(`http://localhost:8000/api/dashboard/products/update/category`,data)

  }
  getCategoryById(id:any):Observable<any>{
    return this.httpservice.get<any>(`http://localhost:8000/api/dashboard/category/${id}`)

  }
  createCat(cat:any): Observable<any>{
    return this.httpservice.post<any>('http://localhost:8000/api/dashboard/create/category',cat)

  }
}
