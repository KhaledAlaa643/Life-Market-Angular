import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/Services/offers.service';
import { Offers } from './../../Models/offers';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers:any
  constructor(private offersservice:OffersService){}
  ngOnInit(): void {
    this.offersservice.getAllOffers().subscribe({
      next: (res) => {
        this.offers=res;
      }
    })
  }

  deleteOffer(offer:Offers){

    // var index =  this.offers.findIndex(obj =>{ obj.id ===offer.id});
    let index = this.offers.findIndex((user: any) => user.id === offer.id); 
    console.log(index);
    this.offersservice.deleteoffer(offer).subscribe({
      next: (res) => {
        this.offers.splice(index,1)

      } 
    });
  }

}
