import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../viewmodules/order';
@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  constructor(private httpservice: HttpClient) { }
  getOrders(): Observable<Order> {
    return this.httpservice.get<Order>('http://localhost:8000/api/orders', {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }

  
}
