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
  getAllOffers():Observable<Offers[]>{
    return this._httpClient.get<Offers[]>(`${environment.apiURL}/offers`)
  }
  deleteoffer(offer:Offers):Observable<Offers>{
    return this._httpClient.delete<Offers>(`${environment.apiURL}/offers/${offer.id}`)

  }
  getOfferByid(id:any):Observable<Offers[]>{
    return this._httpClient.get<Offers[]>(`${environment.apiURL}/offer/${id}`)
  }
  updateoffer(offer:Offers):Observable <any>{
    return  this._httpClient.put<any>(`${environment.apiURL}/offers/${offer.id}`,offer)
  }
  addNewoffer(offer:Offers):Observable<Offers>{
    return this._httpClient.post<Offers>(`${environment.apiURL}/offers`,offer)
  }
}
