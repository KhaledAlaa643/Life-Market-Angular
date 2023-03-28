import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateOrderService {

  constructor(private _httpClient:HttpClient) { }
  createOrder(data:any){
    return this._httpClient.post(`${environment.apiURL}/checkout/createorder`,data)
  }
}
