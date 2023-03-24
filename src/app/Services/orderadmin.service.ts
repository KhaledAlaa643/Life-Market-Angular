import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Order } from '../viewmodules/order';
@Injectable({
  providedIn: 'root'
})

export class OrderadminService {
constructor(private httpservice: HttpClient) {}
  getAllOrders(): Observable<Order> {
    return this.httpservice.get<Order>('http://localhost:8000/api/orders', {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    })
  }
  getOrdersByUserId(userId:number): Observable<Order> {
    return this.httpservice.get<Order>(`http://localhost:8000/api/orders/${userId}`,{
    headers: new HttpHeaders({
      accept: 'application/json'
    })
    });
  }

  updateOrder(data:any,orderId: number): Observable<Order> {
    return this.httpservice.put<Order>(`http://localhost:8000/api/orders/${orderId}`,data,{
      headers: new HttpHeaders({
        accept: 'application/json' 
    })
  })
  }
  

  getOrderDetails(orderId: number): Observable<Order> {
    return this.httpservice.get<Order>(`http://localhost:8000/api/orders/${orderId}` ,{
      headers: new HttpHeaders({
        accept: 'application/json' 
    })
    })
  }
 

}
  

