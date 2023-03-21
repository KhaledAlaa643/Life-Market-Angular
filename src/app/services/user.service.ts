import { Injectable } from '@angular/core';
import { User } from '../viewmodules/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice: HttpClient) { }
  createUser(userData: User): Observable<User> {
    return this.httpservice.post<User>(`http://localhost:8000/api/register`, userData, {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    })
  }
  
  login(userData: User): Observable<User> {
    return this.httpservice.post<User>(`http://localhost:8000/api/login`, userData, {
      headers: new HttpHeaders({

        accept: 'application/json'
      })
    })
  }

  logout(): Observable<any> {

    return this.httpservice.post<any>('http://localhost:8000/api/logout', {}, {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }
  
};
