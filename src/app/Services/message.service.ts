import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../Models/message';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _httpClient:HttpClient) { }

  saveNewMessage(newMess:Message):Observable<Message>{
    return this._httpClient.post<Message>(
      `${environment.apiURL}/contact_us/`,
      newMess,
      {
        headers:new HttpHeaders({
          'accept':"application/json"
        })
      }
    ).pipe(retry(2));
  }

  getAllMessages():Observable<Message[]>{
    return this._httpClient.get<Message[]>(`${environment.apiURL}/contact_us`)

  }
  
}
