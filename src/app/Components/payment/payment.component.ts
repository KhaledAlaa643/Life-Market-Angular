import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import {render} from 'creditcardpayments/creditCardPayments'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent  implements OnInit{
  name=""
  number=0
  expire=0
  cvv=0
  totalPrice!:any
  constructor(private http: HttpClient,
    private cartService:CartService,
    ) {
      render({
        id: "#myPalpal",
        currency:"USD",
        value:"100.00 ",
        onApprove:(details)=>{
          alert("success transaction")
        }
      })
    }
    ngOnInit(): void {
      this.cartService.totalPrice.subscribe(totalPrice => {
        this.totalPrice = totalPrice
        // You can do whatever you want with the totalPrice value here
      });
    }
  formValid() {
    return this.name && this.number && this.expire && this.cvv;
  }
  submitForm() {
    const paymentData = {
      name: this.name,
      number: this.number,
      expire: this.expire,
      cvv: this.cvv,
    };
    this.http.post('https://api.paymentprocessor.com/pay', paymentData)
    .subscribe((response) => {
      console.log('Payment successful', response);
    }, (error) => {
      console.error('Payment error', error);
    });
  }
}

