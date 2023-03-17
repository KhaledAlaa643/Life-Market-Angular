import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {

  constructor(private http:HttpClient) { }
  sendPasswordResetLink(userEmail: any){
  return  this.http.post(`http://localhost:8000/api/password-reset`,userEmail,{
      headers : new HttpHeaders( {

           accept :'application/json'
      }),



    })
  }
}
