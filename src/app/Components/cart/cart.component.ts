import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/Models/product'
import { CartService } from 'src/app/Services/cart.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  products: any[] = [];
  totalPrice:number = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getCarts().subscribe((res) => {
      this.products = res;
      // console.log(this.products);
      this.products.forEach(e=>{
        this.totalPrice+=e.price*e.quantity;
      })
      // console.log(this.totalPrice);
    })
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

}
