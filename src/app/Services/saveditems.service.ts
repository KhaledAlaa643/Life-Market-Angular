import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../viewmodules/item';
import { environment } from 'src/environments/environment.development';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})

export class SaveditemsService {

  constructor(private httpservice: HttpClient) { }
  getSavedItem(): Observable<Product> {
    return this.httpservice.get<Product>(`${environment.apiURL}/fav-items`, {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }
  deletFavItem(id:any):Observable<string>{
    return  this.httpservice.post<string>(`${environment.apiURL}/fav-item/delete`,id, {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }

}
