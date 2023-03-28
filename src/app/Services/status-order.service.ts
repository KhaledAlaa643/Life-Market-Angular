import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../viewmodules/order';

@Injectable({
  providedIn: 'root'
})
export class StatusOrderService {
  constructor(private _httpClient:HttpClient) { }
  getStatus(user_id:number):Observable<Order[]>{
    return this._httpClient.get<Order[]>(`http://127.0.0.1:8000/api/status/checkout/${user_id}`)
  }
}
