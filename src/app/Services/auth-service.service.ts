import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
token: any
  constructor() { }
  isLoggedIn(): string | null{
    return this.token = localStorage.getItem('token'); // get token from local storage

    // const payload = atob(token.split('.')[1]); // decode payload of token

    // const parsedPayload = JSON.parse(payload); // convert payload into an Object

    // return parsedPayload.exp > Date.now() / 1000; // check if token is expired
  }
}
