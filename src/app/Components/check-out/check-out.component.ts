import { Component } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {
  products: Product[] = []
  constructor(private cartService: CartService) {}
  ngOnInit(): void
  {
    this.cartService.getCarts().subscribe((products) => {
      this.products = products
    })
  }
  total(): any {
    let total: number = 0
    for (let product of this.products) {
      total += product.price * product.quantity
    }
    return total
  }
}
