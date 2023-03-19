import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../viewmodules/item';
@Injectable({
  providedIn: 'root'
})

export class SaveditemsService {
   
  constructor(private httpservice: HttpClient) { }
  getSavedItem(): Observable<Item> {
    return this.httpservice.get<Item>('http://localhost:8000/api/saveditems', {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }
  
}
