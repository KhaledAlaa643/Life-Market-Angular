import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileServiceService } from 'src/app/Services/profile-service.service';
import { Location } from '@angular/common';
import { Address } from 'src/app/viewmodules/address';
import { AddressService } from 'src/app/Services/address.service';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  governorate: any;

  constructor(
    private addressserve: AddressService,
    private route: Router,
    private http: HttpClient,
    private location: Location,
  ) { }
  ngOnInit(): void {
    this.addressserve.getAlladdress().subscribe({
      next: (res) => {
        console.log(res);
        this.governorate = res;
      },
      error: (err) => {
        console.log(err.error.error);
      }
    });
  }
  address: Address = {} as Address;

  CreateAdress() {
    this.addressserve.CreateAdress(this.address).subscribe({
      next: (response: any) => {
        console.log(response);

        // this.route.navigate(['/main/profile/myaccount']);
        this.location.back()
      },
      error: (err) => {
        console.log(err.error.error);
      }
    });
  }


}
