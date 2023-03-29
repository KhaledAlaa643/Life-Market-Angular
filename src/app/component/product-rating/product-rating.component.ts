import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product_Rating } from 'src/app/Models/product';
import { OrdersService } from 'src/app/Services/orders.service';
import { ProductsService } from 'src/app/Services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.css']
})
export class ProductRatingComponent {

  prd: any;
  prdRate: Product_Rating = {} as Product_Rating;
  product_id:any;

  constructor(
    private prdServe: ProductsService,
    private Orderserve: OrdersService,
    private route: Router,
    private http: HttpClient,
    private activatRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.product_id = String(this.activatRoute.snapshot.paramMap.get('id'));
    this.Orderserve.getOrdersByUser().subscribe({
      next: (res) => {
        console.log(res);
        this.prd = res;
      },
      error: (err) => { console.log(err.error.error) }
    })
  }

  addRating(prdId: any, star: any) {
    this.prdRate.prd_id = prdId;
    this.prdRate.star = star;
    if (this.prdRate.review!='') {
      this.prdServe.addRating(this.prdRate).subscribe({
        next: (res) => {
          this.prdServe.updateRating(this.product_id).subscribe({
            next: (res) => {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Rating Added Successfully',
                showConfirmButton: false,
                timer: 1500,
              }).then(()=>{
                this.route.navigate(['/main/profile/myaccount'])
              });
            }
          })
        },
        error: (err) => { 
          Swal.fire({
            icon: 'error',
            title: 'Please Enter Your Comment...',
          })
        }
      })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Please Enter Your Comment...',
      })
    }
    console.log(this.prdRate);
  }

}
