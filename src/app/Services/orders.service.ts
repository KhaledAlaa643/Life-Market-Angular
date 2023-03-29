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
    return this.httpservice.get<Order>('http://localhost:8000/api/user/orders', {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }
  getOrdersTotal(): Observable<Order> {
    return this.httpservice.get<Order>('http://localhost:8000/api/orders/total', {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }
  getOrdersByUser(): Observable<Order> {
    return this.httpservice.get<Order>('http://localhost:8000/api/ordersbyuserid', {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }

}
