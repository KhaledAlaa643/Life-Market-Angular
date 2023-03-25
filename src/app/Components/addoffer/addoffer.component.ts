import { HttpClient } from '@angular/common/http';
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
  file!:File
  x!:any
  constructor(private offerservice:OffersService,private activeroute: ActivatedRoute,private router:Router,private http: HttpClient){}

  
  addOffer(){
    const formData = new FormData();
    formData.append('photo', this.file, this.file.name);
    formData.append('offer_title', this.offer.offer_title);
    formData.append('type',this.offer.type);
    this.x =this.offer.discont_percent;
    formData.append('discont_percent',this.x);
    // console.log(formData.get("offer_title"))

    this.offerservice.addNewoffer(formData).subscribe({
      next:(res)=>{
        this.router.navigate(['./admin/offers'])


      }
    })
  }


  onFileSelected(event:any) {

    this.file= event.target.files[0];

  }
   


}
