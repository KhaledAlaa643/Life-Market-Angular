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
  products: Product[] = []
  constructor(private cartService: CartService) {}
  ngOnInit(): void
  {
    this.cartService.getCarts().subscribe((products) => {
      this.products = products

    })
  }


  inc(proId: any)
  {
    this.products = this.products.map((e: Product | any) => {
      if (e.id === proId) {
        return {
          ...e,
          quantity: e.quantity + 1,
        }
      }
      return e
    })
  }
  dec(proId: any) {
    this.products = this.products.map((e: Product | any) => {
      if (e.id === proId) {
        return {
          ...e,
          quantity: e.quantity - 1 > 0 ? e.quantity - 1 : 1,
        }
      }
      return e
    })
  }
  total(): any {
    let total: number = 0
    for (let product of this.products) {
      total += product.price * product.quantity
    }
    return total
  }

  // Delete From Only Browser :
  deleteCart (id: string | undefined){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'darkcyan',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your product has been deleted from your cart.', 'success');
    let index = this.products.findIndex(e=>e.id === id)
    index !==-1 ? this.products.splice(index,1) : ""
    }
    })
  }
  // Delete From Both Browser And API :
  // deleteProduct(productId: any) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: 'darkcyan',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire('Deleted!', 'Your product has been deleted from your cart.', 'success');
  //       this.cartService.deleteCart(productId).subscribe(() => {
  //         const index = this.products.findIndex((p) => p.id === productId)
  //         if (index !== -1) {
  //           this.products.splice(index, 1)
  //         }
  //       })
  //     }
  //   })
  // }
  check(){
    let cart = this.products
    let total = this.total()
    let product = [cart,total]
    return product
  }
}
