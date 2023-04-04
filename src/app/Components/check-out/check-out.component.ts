import { Component } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { Delivery } from 'src/app/Models/delivery';
import { DeliveryService } from 'src/app/Services/delivery.service';
import { AddressService } from 'src/app/Services/address.service';
import { Address } from 'src/app/viewmodules/address';
import { Router } from '@angular/router';
import { User } from 'src/app/viewmodules/user';
import { CartService } from 'src/app/Services/cart.service';
import { Order } from 'src/app/viewmodules/order';
import { HttpClient } from '@angular/common/http';
import { CreateOrderService } from 'src/app/Services/create-order.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {

  address: Address = {} as Address;
  products: Product[] = []
  delivery: Delivery[] = []
  Addressres: Address[] = []
  Orders: Order[] = []
  user: User[] = [];
  selectedName: string = "";
  selectedPrice: number = 0
  selectedId: any
  ads!: any
  show!: boolean;
  hide!: boolean;
  selectedTime: Date = new Date();
  displayDate!: Date;
  user_id = Number(localStorage.getItem('userId'))
  totalPrice!: any
  orderId!: any


  constructor(
    private route: Router,
    private cartService: CartService,
    private addressserve: AddressService,
    private deliveryService: DeliveryService,
    private cartData: CartService,
    private createOrder: CreateOrderService
  ){}


  ngOnInit(): void {

    this.cartService.totalPrice.subscribe(totalPrice => {
      this.totalPrice = totalPrice;
    });

    this.cartService.getCarts().subscribe((res) => {
      this.products = res
    })

    this.addressserve.getaddressData().subscribe({
      next: (data) => {
        this.ads = data
        // console.log(this.ads);
        if (this.ads['error']) {
          this.show = true;
          this.hide = false;
        } else {
          this.show = false;
          this.hide = true;
          this.deliveryService.getDeliverysByGovernorate(this.ads.governorate).subscribe((res) => {
            this.delivery = res
            this.selectedId = this.delivery[0].id;
            this.selectedName = this.delivery[0].governorate;
            this.selectedPrice = this.delivery[0].price
            this.selectedTime.setDate(this.selectedTime.getDate() + Number(this.delivery[0].time));
            this.displayDate = this.selectedTime; // Assign the updated date to the displayDate variable
          })
        }
      },
      error: (err) => {
        console.log(err.error.error);
      }
    });
  }


  UpdateAdress() {
    this.addressserve.UpdateAdress(this.address).subscribe({
      next: (data) => {
        this.route.navigate(['/main/profile/myaccount']);
        // console.log(data)
      },
      error: (err) => { console.log(err.error.error) }
    })
  }


  totalFun(): any {
    let total: number = 0
    for (let product of this.products) {
      total += product.price * product.quantity
    }
    return total
  }


  totalAll() {
    let total: number = 0
    for (let product of this.products) {
      total += product.price * product.quantity
    }
    return total + this.selectedPrice
  }


  post() {
    const payload = {
      total: this.totalAll(),
      delivery_price_id: this.selectedId,
      user_id: this.user_id
    };
    return this.createOrder.createOrder(payload).subscribe(
      (response) => {
        let result: any = response
        this.route.navigate(['main/payment'])
        this.cartData.totalPrice.next(this.totalAll())
        this.orderId = result.id
        this.createOrder.addOrder(this.orderId).subscribe((res) => {
          // console.log(res);
        })
        // console.log(result.id);
        localStorage.setItem('totalPrice', this.totalAll().toString());
      },
      (error) => {
        // console.error('Error creating order');
        console.error(error);
      }
    );

  }
  add() {
    this.createOrder.addOrder(this.orderId).subscribe((res) => {
      // console.log(res);
    })
  }
}
