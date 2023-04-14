import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product'
import { CartService } from 'src/app/Services/cart.service'
import { ProductsService } from 'src/app/Services/products.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  products: any[] = [];
  totalPrice:number = 0;
  topSellingProducts: Product[] = [];
  topSelling: Product[] = []; 
  topRatingProducts: Product[] = [];
  topRating: Product[] = [];
  isfull:any = 0;

  constructor(
    private cartService: CartService,
    private _productServ: ProductsService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.cartService.getCarts().subscribe((res) => {
      this.products = res;
      if(this.products[0]){
        this.isfull=1;
      }
      else{
        this.isfull=-1;
      }
      // console.log(this.products);
      this.products.forEach(e=>{
        this.totalPrice+=e.price*e.quantity;
      })
      // console.log(this.totalPrice);
    })

    this._productServ.getTopSellingProducts().subscribe({
      next: (res) => {
        this.topSellingProducts = res;
        for(let i=0;i<6;i++){
          this.topSelling[i] = this.topSellingProducts[i];
        }
      }
    });
    this._productServ.getTopRatingProducts().subscribe({
      next: (res) => {
        this.topRatingProducts = res;
        for(let i=0;i<6;i++){
          this.topRating[i] = this.topRatingProducts[i];
        }
        // console.log(this.topSelling);
      }
    });
    console.log(this.isfull);
    
  }

  incrementPrd(_id:any) {
    this.cartService.incrementPrdInCart(_id).subscribe({
      next: (res) => {
        if(res==1){
          window.location.reload();
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Out of Stock',
          })
        }
      }
    });
  }

  decrementPrd(_id:any) {
    this.cartService.decrementPrdInCart(_id).subscribe({
      next: (res) => {
        if(res==1){
          window.location.reload();
        }
      }
    });
  }

  deleteCart(__id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'darkcyan',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.deleteCart(__id).subscribe({
          next: (res) => {
            Swal.fire({
              icon: 'success',
              text: 'Delete Item From Cart Successfully',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              window.location.reload();
            });
          }
        });
      }
    });
  }

  goToPrdList(_type:any, id:any){
    if(_type == "cat"){
      this.router.navigate(['main/products/list/category', id], { queryParams: { type: _type} });
    }
    else{
      this.router.navigate(['main/products/list', id], { queryParams: { type: _type} });
    }
  }


  goToPrdDetails(id:any){
    this.router.navigate(['main/product/', id]);
  }

}
