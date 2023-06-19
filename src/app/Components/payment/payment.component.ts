import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { CartService } from 'src/app/Services/cart.service'
import { render } from 'creditcardpayments/creditCardPayments'
import { Payment } from 'src/app/Models/payment'
import { CreateOrderService } from 'src/app/Services/create-order.service'
import Swal from 'sweetalert2'
import { Router } from '@angular/router'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  payment: Payment = {} as Payment
  totalPrice!: any

  constructor(
    private cartService: CartService,
    private createOrder: CreateOrderService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const storedTotalPrice = localStorage.getItem('totalPrice')

    if (storedTotalPrice) {
      this.totalPrice = parseFloat(storedTotalPrice)
    } else {
      this.totalPrice = 0
    }

    this.cartService.totalPrice.subscribe((totalPrice) => {
      this.totalPrice = storedTotalPrice
    })
  }

  pay() {
    this.payment.amount = Math.floor((this.totalPrice / 30) * 100)
    // console.log(this.payment);
    this.createOrder.orderData(this.payment).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          text: 'Your Order is Success!',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          localStorage.removeItem('totalPrice')
          this.router.navigate(['/main/home'])
        })
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'The card data is incorrect, please verify the entered data',
        })
        console.log(err)
      },
    })
  }
}
