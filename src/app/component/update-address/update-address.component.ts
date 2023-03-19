import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/Services/address.service';
import { Address } from 'src/app/viewmodules/address';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent {
  address:Address={} as Address;
  constructor(
    private addressserve:AddressService, 
    private route: Router,
    private http: HttpClient
  ){ }
  UpdateAdress(){
    
      this.addressserve.UpdateAdress(this.address).subscribe({
        next: (data) => { 
          console.log(data)
  
        },
        error: (err) => {console.log(err.error.error)}
      })
    }
   
}

  

