import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Address } from '../viewmodules/address';
@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private httpservice: HttpClient) { }
  address: Address[] = []
  getaddressData(): Observable<Address> {
    return this.httpservice.get<Address>('http://localhost:8000/api/address', {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }
  CheckAddress() {
    return localStorage.getItem("userId")

  }
  UpdateAdress(addressData: Address): Observable<Address> {
    return this.httpservice.post<Address>('http://localhost:8000/api/address/update', addressData, {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }
  CreateAdress(addressData: Address): Observable<Address> {
    return this.httpservice.post<Address>('http://localhost:8000/api/address/create', addressData, {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }
  getAlladdressData(): Observable<Address[]> {
    return this.httpservice.get<Address[]>('http://localhost:8000/api/address', {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }

  getAlladdress(): Observable<any> {
    return this.httpservice.get<any>('http://localhost:8000/api/alladdress', {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }
}
