import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../viewmodules/notification';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private httpservice: HttpClient) { }
  getNotifications(): Observable<Notification> {
    return this.httpservice.get<Notification>('http://localhost:8000/api/notifications', {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }
  public markAsRead(notificationId: number): Observable<Notification> {
    return this.httpservice.post<Notification>(`http://localhost:8000/api/notifications/mark-as-read`, { id: notificationId });
  }


  getUnreadCount(): Observable<number> {
    return this.httpservice.get<{ unread_count: number }>(`http://localhost:8000/api/notifications/unread-count`).pipe(
      map(response => response.unread_count)
    );
  }

}

