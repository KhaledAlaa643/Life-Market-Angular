import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffersService } from 'src/app/Services/offers.service';
import { Offers } from './../../Models/offers';

@Component({
  selector: 'app-editoffer',
  templateUrl: './editoffer.component.html',
  styleUrls: ['./editoffer.component.css']
})
export class EditofferComponent implements OnInit {
  product_id:any;
  offer!:any;
  constructor(private offerservice:OffersService,private activeroute: ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.product_id = this.activeroute.snapshot.paramMap.get("id");
    this.offerservice.getOfferByid(this.product_id).subscribe({
      next:(res)=>{
        this.offer=res;


      }
    })

  }

  saveEditedProduct(){
    this.offerservice.updateoffer(this.offer).subscribe({
      next:(res)=>{
        console.log(res)

        console.log(res)
        this.router.navigate(['./admin/offers'])
      }
     })
  }
  


}
