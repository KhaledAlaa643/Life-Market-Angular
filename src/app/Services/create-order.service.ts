import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Payment } from '../Models/payment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateOrderService {

  constructor(private _httpClient:HttpClient) { }
  createOrder(data:any){
    return this._httpClient.post(`${environment.apiURL}/checkout/createorder`,data)
  }
  addOrder(id:any){
    return this._httpClient.get(`${environment.apiURL}/orders/checkout/${id}`)
  }
  // send the data {card number, exp month, exp year,total}
  orderData(card:any):Observable<any>{
    return this._httpClient.post<any>(`http://localhost:8000/api/paymentt/checkoutt`,card)
  }



}
