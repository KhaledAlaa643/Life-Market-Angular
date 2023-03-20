import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/viewmodules/user';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfileServiceService } from 'src/app/Services/profile-service.service';
import { Address } from 'src/app/viewmodules/address';
import { AddressService } from 'src/app/Services/address.service';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit{
  user:User={} as User;
  Addressres!:any;
   show!:boolean;
   hide!:boolean;
  constructor(
    private profileserve:ProfileServiceService,
    private addressserve:AddressService,
    private route: Router,
    private http: HttpClient
  ){ }
  ngOnInit(): void {
    this.profileserve.getUserData().subscribe({
      next: (data) => {
        this.user=data
        // console.log(data)

      },
      error: (err) => {console.log(err.error.error)}
    })


  this.addressserve.getaddressData().subscribe({
    next: (data) => {
      this.Addressres = data;
      if (this.Addressres['error']) {
        this.show = false;
        this.hide=true;
         console.log(this.Addressres)
      } else {
        this.show = true;
        this.hide=false;
        // console.log(this.Addressres[0])
      }
    },
    error: (err) => {
      console.log(err.error.error);
    }
  });
}


}



