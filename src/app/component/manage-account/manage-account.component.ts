import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from 'src/app/Services/profile-service.service';
import { User } from 'src/app/viewmodules/user';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})

export class ManageAccountComponent  {
  user:User={} as User;
  res!:any;
  constructor(
    private profileserve:ProfileServiceService,
    private route: Router,
    private http: HttpClient
  ){ }
  ngOnInit(): void {
    this.profileserve.getUserData().subscribe({
      next: (data) => {
        this.user=data
         console.log(data)

      },
      error: (err) => {console.log(err.error.error)}
    })
  }
  UpdateUserData(){
    this.profileserve.UpdateUserData(this.user).subscribe({
      next: (data) => {
        this.user=data
        // console.log(data)
        this.route.navigate(['/main/profile/myaccount'])
      },
      error: (err) => {console.log(err.error.error)}
    })
  }
}
