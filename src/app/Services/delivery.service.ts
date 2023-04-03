import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Delivery } from '../Models/delivery';
@Injectable({
  providedIn: 'root'
})
export class DeliveryService {


  delivery:Delivery[]=[]

  constructor(
    private _httpClient:HttpClient
    ) { }

  getDeliverys():Observable<Delivery[]>{
    return this._httpClient.get<Delivery[]>(`${environment.apiURL}/delivery`)
  }
  getDeliverysByGovernorate(governorate:any):Observable<Delivery[]>{
    return this._httpClient.get<Delivery[]>(`${environment.apiURL}/governorate/checkout/${governorate}`)
  }
  deleteDelivery(deliveryId:number):Observable<Delivery>{
    return this._httpClient.delete<Delivery>(`${environment.apiURL}/delivery/${deliveryId}`)
  }
  getDelivery(id: number): Observable<any> {
    return this._httpClient.get(`${environment.apiURL}/delivery/${id}`);
  }
  getDeliverysIDs () {
    return this.delivery.map(e=>e.id)
  }
  updateDelivery(id:string | undefined, DeliveryData: Delivery):Observable<Delivery>{
    return this._httpClient.patch<Delivery>(`${environment.apiURL}/delivery/${id}`,DeliveryData,)
  }
  saveDelivery(Delivery:Delivery){
    return this._httpClient.post<Delivery>(`${environment.apiURL}/delivery/`,Delivery)
  }
}
