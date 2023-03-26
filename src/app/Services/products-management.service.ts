import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsManagementService {

  constructor(private httpservice: HttpClient) { }

  getAllProducts(): Observable<any>{
return this.httpservice.get<any>('http://localhost:8000/api/dashboard/products/all-products')
  }
  getProductsByCat(cat:any):Observable<any>{
    return this.httpservice.get<any>(`http://localhost:8000/api/category/products/${cat}`)

  }
  getProductsBySubCat(Subcat:any): Observable<any>{
    return this.httpservice.get<any>(`http://localhost:8000/api/dashboard/products/by-sub_category/${Subcat}`)

  }


createProduct(data:any):Observable<any>{
  return this.httpservice.post<any>('http://localhost:8000/api/dashboard/products/create/product',data, {
    headers: new HttpHeaders({
      accept: 'application/json'
    })
  });
}
deleteprd(id:number): Observable<any>{
  return this.httpservice.delete<any>(`http://localhost:8000/api/dashboard/products/delete/product/${id}`)

}
updateProduct(data:any):Observable<any>{
  return this.httpservice.post<any>('http://localhost:8000/api/dashboard/products/update/product',data)
}

getProductById(id:any):Observable<any>{
  return this.httpservice.get<any>(`http://localhost:8000/api/dashboard/product/${id}`)

}
}
