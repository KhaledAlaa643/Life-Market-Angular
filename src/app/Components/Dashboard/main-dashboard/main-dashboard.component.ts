import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/Services/address.service';
import { ProfileServiceService } from 'src/app/Services/profile-service.service';
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

  constructor(
    private profileserve: ProfileServiceService,
    private route: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.profileserve.getUserData().subscribe({
      next: (data) => {
        this.user = data
        // console.log(data)
      },
      error: (err) => { console.log(err.error.error) }
    })
  }

}
