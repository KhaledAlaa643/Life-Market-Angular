import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpservice: HttpClient) { }


  getGalleryById(id:any): Observable<any>{
    return this.httpservice.get<any>(`http://localhost:8000/api/dashboard/gallery/product/${id}`,)

  }
  createGallery(data:any): Observable<any>{
    return this.httpservice.post<any>(`http://localhost:8000/api/dashboard/gallery/product`,data)

  }
  deleteGallery(id:any): Observable<any>{
    return this.httpservice.delete<any>(`http://localhost:8000/api/dashboard/gallery/product/${id}`,)

  }
}
