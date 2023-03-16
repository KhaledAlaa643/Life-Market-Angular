import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/viewmodules/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  user:User={} as User;
  res!:any;
constructor(private userserve:UserService,private route:Router){}
//   profile(){
//     this.userserve.getUserById
//   }
}

