import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/Services/address.service';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { ProfileServiceService } from 'src/app/Services/profile-service.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/viewmodules/user';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  user: User = {} as User;
  Addressres!: any;
  show!: boolean;
  hide!: boolean;
  x:boolean = false;

  constructor(
    private profileserve: ProfileServiceService,
    private route: Router,
    private http: HttpClient,
    private _authServ:AuthServiceService,
    private _userServ:UserService
  ) { }

  ngOnInit(): void {
    this.profileserve.getUserData().subscribe({
      next: (data) => {
        this.user = data
        if(this.user.type == "admin"){
          this.x=true;
        }
        else{
          this.logoutFun();
        }
      },
      error: (err) => { console.log(err.error.error) }
    })
  }

  logoutFun(){
    this._userServ.logout().subscribe({
      next:(res)=>{
      //  console.log(res)
       localStorage.removeItem('token');
       localStorage.removeItem('userId');
       localStorage.removeItem('userName');
       this.route.navigate(['/login'])
      },
      error:(err:any)=>{
        console.log(err.error)
      }
    })
  }

}
