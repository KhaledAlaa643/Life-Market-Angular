import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Customers } from '../Models/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer:Customers[]=[]

  constructor(
    private _httpClient:HttpClient
    ) { }

  getCustomers():Observable<Customers[]>{
    return this._httpClient.get<Customers[]>(`${environment.apiURL}/customer`)
  }
  deleteCustomer(customerId:number):Observable<Customers>{
    return this._httpClient.delete<Customers>(`${environment.apiURL}/customer/${customerId}`)
  }
  getCustomer(id: number): Observable<any> {
    return this._httpClient.get(`${environment.apiURL}/customer/${id}`);
  }
  getCustomersIDs () {
    return this.customer.map(e=>e.id)
  }
  updateCustomer(id:string | undefined, CustomersData: Customers):Observable<Customers>{
    return this._httpClient.patch<Customers>(`${environment.apiURL}/customer/${id}`,CustomersData,)
  }
  saveCustomer(Customers:Customers){
    return this._httpClient.post<Customers>(`${environment.apiURL}/customer/`,Customers)
  }
}
