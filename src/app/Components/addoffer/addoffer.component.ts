import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffersService } from 'src/app/Services/offers.service';
import { Offers } from './../../Models/offers';

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.css']
})
export class AddofferComponent {

  offer:Offers={} as Offers 
  constructor(private offerservice:OffersService,private activeroute: ActivatedRoute,private router:Router){}


  addOffer(){
    this.offerservice.addNewoffer(this.offer).subscribe({
      next:(res)=>{
        console.log(this.offer)
        this.router.navigate(['./admin/offers'])


      }
    })
  }
}
