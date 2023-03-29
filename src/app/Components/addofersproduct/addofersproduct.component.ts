import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../Services/products.service';
import { Product } from './../../Models/product';
import { OffersService } from 'src/app/Services/offers.service';
import { ActivatedRoute } from '@angular/router';
import { Offers } from './../../Models/offers';
import { ProductOffer } from './../../Models/product-offer';
// import { Swal } from 'sweetalert2';

@Component({
  selector: 'app-addofersproduct',
  templateUrl: './addofersproduct.component.html',
  styleUrls: ['./addofersproduct.component.css']
})
export class AddofersproductComponent implements OnInit  {

  allproducts:any={} as Product;
  offer_id!:any;
  Offer_product:ProductOffer={} as ProductOffer
  products_id:any={} as ProductOffer


  constructor(private prodsservice:ProductsService,private offerservice:OffersService,private activeroute: ActivatedRoute){}
 
  ngOnInit(): void {
    this.offer_id = this.activeroute.snapshot.paramMap.get("id");
    // this.Offer_product.offer_id=this.offer_id;


    this.getAllProducts();
    this.getAllproductsWithOffers();
    this.check;
  }


  getAllProducts()
  {

    this.prodsservice.getAllProducts().subscribe({
      next:(res)=>{
        this.allproducts=res;
        console.log(res);
        


      }
    })
  }

  
  addproductstooffer(pro:any,off:any)
  {this.Offer_product.offer_id=off;
    this.Offer_product.prd_id=pro;
    // console.log(this.Offer_product);

    this.offerservice.addProductTooffer(this.Offer_product).subscribe({
      next:(res)=>{
        console.log(this.Offer_product);
      }
    })
    this.ngOnInit();
  }


  deleteProductFromffer(id:any){
    this.offerservice.deleteProductFromffer(id).subscribe({
      next:(res)=>{
        console.log(res);
      }
    })
    this.ngOnInit();

  }

  getAllproductsWithOffers(){
    this.offerservice.getAllproductsWithOffers().subscribe({
      next:(res)=>{
        this.products_id=res;
        // console.log(this.products_id);

       
      }
    })
  }

   check (prd_id:any) {
    
   for (let index = 0; index < this.products_id.length; index++)
    {
    if (prd_id==this.products_id[index].prd_id)
    {
      
      return false;
    }
    
  }


  return true

}
   

}
