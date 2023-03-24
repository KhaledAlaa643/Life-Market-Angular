import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCatManageService {

  constructor(private httpservice: HttpClient) { }
  getSubCategories(): Observable<any>{
    return this.httpservice.get<any>('http://localhost:8000/api/dashboard/products/all-sub-categories')

  }
  deleteSubCat(id:any): Observable<any>{
    return this.httpservice.delete<any>(`http://localhost:8000/api/dashboard/products/delete/sub-category/${id}`)

  }
  updateSubCat(data:any): Observable<any>{
    return this.httpservice.post<any>(`http://localhost:8000/api/dashboard/products/update/sub-category`,data)

  }
  getSubCategoryById(id:any,){
    return this.httpservice.get<any>(`http://localhost:8000/api/dashboard/sub-category/${id}`)

  }
  createSubCat(cat:any): Observable<any>{
    return this.httpservice.post<any>('http://localhost:8000/api/dashboard/create/sub-category',cat,{
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    })

  }
}
