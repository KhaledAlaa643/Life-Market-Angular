import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import {render} from 'creditcardpayments/creditCardPayments'
import { Payment } from 'src/app/Models/payment';
import { CreateOrderService } from 'src/app/Services/create-order.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent  implements OnInit{
  payment:Payment = {} as Payment
  totalPrice!: any;
  constructor(private cartService: CartService,
    private createOrder:CreateOrderService) {}

  ngOnInit(): void {
    const storedTotalPrice = localStorage.getItem('totalPrice');
    if (storedTotalPrice) {
      this.totalPrice = parseFloat(storedTotalPrice);
    } else {
      this.totalPrice = 0;
    }

    this.cartService.totalPrice.subscribe(totalPrice => {
      this.totalPrice = storedTotalPrice
    });
  }

  pay(){
    this.payment.amount = this.totalPrice
    console.log(this.payment);
    this.createOrder.orderData(this.payment).subscribe((res)=>{
        Swal.fire({
          icon: 'success',
          text: 'Your Order is Success!',
          showConfirmButton: false,
          timer: 1500
        });
      })
       // Remove total price from local storage
  localStorage.removeItem('totalPrice');
  }
}

