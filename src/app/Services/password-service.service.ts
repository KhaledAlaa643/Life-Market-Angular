import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private API_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  forgetPassword(email: string): Observable<any> {
    return this.http.post(`${this.API_URL}/password/forget`, { email });
  }

  resetPassword(email: string, otp: string): Observable<any> {
    return this.http.post(`${this.API_URL}/password/reset`, { email,otp});
  }

  createNewPassword(email: string, password: string, password_confirmation: string): Observable<any> {
    return this.http.post(`${this.API_URL}/new-password`, { email, password, password_confirmation });
  }
}
