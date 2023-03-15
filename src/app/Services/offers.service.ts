import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Offers } from '../Models/offers';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private _httpClient:HttpClient) { }

  getOffer(type:any):Observable<Offers[]>{
    return this._httpClient.get<Offers[]>(`${environment.apiURL}/offers/${type}`)
  }
}
