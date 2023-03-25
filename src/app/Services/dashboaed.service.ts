import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboaedService {

  constructor(private _httpClient:HttpClient) { }

  getUsersCount():Observable<any>{
    return this._httpClient.get<any>(`${environment.apiURL}/users/count`)
  }

  getOrderCount():Observable<any>{
    return this._httpClient.get<any>(`${environment.apiURL}/orders/count`)
  }

  getUsersChart():Observable<any>{
    return this._httpClient.get<any>(`${environment.apiURL}/userss`)
  }

  getProductCount():Observable<any>{
    return this._httpClient.get<any>(`${environment.apiURL}/product/count`)
  }

  getTotalIncome():Observable<any>{
    return this._httpClient.get<any>(`${environment.apiURL}/total_income`)
  }

}
