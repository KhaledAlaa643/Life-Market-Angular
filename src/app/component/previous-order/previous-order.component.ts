import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product_Rating } from 'src/app/Models/product';
import { OrdersService } from 'src/app/Services/orders.service';
import { ProductsService } from 'src/app/Services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-previous-order',
  templateUrl: './previous-order.component.html',
  styleUrls: ['./previous-order.component.css']
})
export class PreviousOrderComponent implements OnInit {

  prd: any;
  prdRate: Product_Rating = {} as Product_Rating;

  constructor(
    private prdServe: ProductsService,
    private Orderserve: OrdersService,
    private route: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.Orderserve.getOrdersByUser().subscribe({
      next: (res) => {
        // console.log(res);
        this.prd = res;
      },
      error: (err) => { console.log(err.error.error) }
    })
  }

  rateProduct(prd_id: any) {
    this.prdServe.getRating(prd_id).subscribe({
      next: (res) => {
        // console.log(res);
        if(res.length>0){
          Swal.fire({
            icon: 'info',
            title: 'You have already reviewed this product',
          })
        }
        else {
          this.route.navigate(['main/profile/productRating/', prd_id]);
        }
      },
      error: (err) => { 
        Swal.fire({
          icon: 'info',
          title: 'You have already reviewed this product',
        })
      }
    })
  }


}
