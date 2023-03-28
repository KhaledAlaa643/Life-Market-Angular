import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductsService } from 'src/app/Services/products.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/viewmodules/user';
import { Notification } from 'src/app/viewmodules/notification';
import { NotificationService } from 'src/app/Services/notification.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  user: User = {} as User;
  res!: any;
  topSellingProducts: Product[] = [];
  topSelling: Product[] = [];
  topRatingProducts: Product[] = [];
  topRating: Product[] = [];
  // notifications = [];
  data:any
  notificationCount: number = 0;
  
  unreadCount: number = 0; 

  notify:Notification = {} as Notification;
  constructor(
    private userserve: UserService,
    private route: Router,
    private _productServ: ProductsService,
    private router:Router,
    private notifserve:NotificationService,
  ){}


  ngOnInit(): void {
    this._productServ.getTopSellingProducts().subscribe({
      next: (res) => {
        this.topSellingProducts = res;
        for(let i=0;i<6;i++){
          this.topSelling[i] = this.topSellingProducts[i];
        }
      }
    });
    this._productServ.getTopRatingProducts().subscribe({
      next: (res) => {
        this.topRatingProducts = res;
        for(let i=0;i<6;i++){
          this.topRating[i] = this.topRatingProducts[i];
        }
        // console.log(this.topSelling);
      }
    });
    
    this.notifserve.getUnreadCount().subscribe(count => {
      this.unreadCount = count;
    });
    
  }
  markAsRead(notificationId: number) {
    this.notifserve.markAsRead(notificationId).subscribe(() => {
      this.unreadCount -= 1;
    });
  }

  
  
  goToPrdList(_type:any, id:any){
    if(_type == "cat"){
      this.router.navigate(['main/products/list/category', id], { queryParams: { type: _type} });
    }
    else{
      this.router.navigate(['main/products/list', id], { queryParams: { type: _type} });
    }
  }


  goToPrdDetails(id:any){
    this.router.navigate(['main/product/', id]);
  }


  logoutFun() {
    return this.userserve.logout().subscribe({
      next: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        this.route.navigate(['/login'])

      },
      error: (err: any) => {
        console.log(err.error);
      }
    });
  }
}



