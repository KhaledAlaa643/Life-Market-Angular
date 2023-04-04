import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/Services/address.service';
import { Address } from 'src/app/viewmodules/address';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  address:Address={} as Address;
  governorate:any;

  constructor(
    private addressserve:AddressService,
    private route: Router,
    private http: HttpClient,
    private location: Location,
  ){ }

  ngOnInit(): void {
    this.addressserve.getaddressData().subscribe({
      next: (data) => {
        this.address=data
        //  console.log(data)

      },
      error: (err) => {console.log(err.error.error)}
    })
    this.addressserve.getAlladdress().subscribe({
      next: (res) => {
        // console.log(res);
        this.governorate = res;
      },
      error: (err) => {
        console.log(err.error.error);
      }
    });
  }

  UpdateAdress(){

      this.addressserve.UpdateAdress(this.address).subscribe({
        next: (data) => {
          // this.route.navigate(['/main/profile/myaccount']);
          // console.log(data)
          this.location.back()
        },
        error: (err) => {console.log(err.error.error)}
      })
    }

}



