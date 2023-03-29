import { Injectable } from '@angular/core';
import { User } from '../viewmodules/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  constructor(private httpservice: HttpClient) { }
  getUserData(): Observable<User> {
    return this.httpservice.get<User>('http://localhost:8000/api/user/data', {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }
  UpdateUserData(userData: User): Observable<User> {
    return this.httpservice.post<User>(`http://localhost:8000/api/user/update`, userData, {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }
  getUserDataByID(): Observable<User[]> {
    return this.httpservice.get<User[]>(`http://localhost:8000/api/user/data/`, {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }

}
