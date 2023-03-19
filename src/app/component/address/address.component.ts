import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileServiceService } from 'src/app/Services/profile-service.service';
import { Address } from 'src/app/viewmodules/address';
import { AddressService } from 'src/app/Services/address.service';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent  {
  constructor(
    private addressserve:AddressService, 
    private route: Router,
    private http: HttpClient
  ){ }
  address:Address={} as Address;
  CreateAdress(){
      this.addressserve.CreateAdress(this.address).subscribe({
        next: (data) => { 
          console.log(data)
          this.route.navigate(['/main/profile/myaccount']);
        },
        error: (err) => {console.log(err.error.error)}

      })
    }
  
  }
