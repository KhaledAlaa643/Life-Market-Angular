import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/viewmodules/notification';
import { NotificationService } from 'src/app/Services/notification.service';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  // notifications: Notification[] = [];
  unreadCount: number = 0;

  notification!: any
  constructor(private notifserve: NotificationService) { }

  ngOnInit() {
    this.notifserve.getNotifications().subscribe(
      (data: Notification) => {
        this.notification = data
        console.log(data);
        if (!data.read_at) {
          this.unreadCount++;
        }
      }
    );



    this.notifserve.getUnreadCount().subscribe({
      next: (count: number) => {
        this.unreadCount = count;
        console.log(count);
      },
      error: (error: any) => {
        console.log(error);
      }
    });

  }
  markNotificationAsRead(notificationId: number) {
    this.notifserve.markAsRead(notificationId).subscribe(() => {
      this.unreadCount -= 1;
    });
  }

}