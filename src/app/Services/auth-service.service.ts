import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
token: any;
userId: any;
  constructor() { }
  isLoggedIn(): string | null{
    return this.token = localStorage.getItem('token') 

  }
  getUserId(){
   return this.userId = localStorage.getItem('userId')
  }
}
