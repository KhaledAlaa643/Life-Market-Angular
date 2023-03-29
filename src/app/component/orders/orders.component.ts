import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Order } from 'src/app/viewmodules/order';
import { Product } from 'src/app/Models/product';
import { OrdersService } from 'src/app/Services/orders.service';
import { AddressService } from 'src/app/Services/address.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  tablevisible!: boolean;
  cardvisible!: boolean;

  orders!: any;
  ordersTotal!: any;

  favitem: Product[] = []
  addressData!: any;
  noOrderMessage: any = null;
  status!: any;
  constructor(
    private Orderserve: OrdersService,
    private route: Router,
    private http: HttpClient,
    private addressserv: AddressService) { }

  ngOnInit(): void {
    this.Orderserve.getOrders().subscribe({
      next: (data) => {


        this.orders = data
        if (this.orders['message']) {
          this.cardvisible = true;
          this.tablevisible = false;
        } else {
          this.cardvisible = false;
          this.tablevisible = true;
        }


      },
      error: (err) => { console.log(err.error.error) }
    })

    this.Orderserve.getOrdersTotal().subscribe({
      next: (data) => {
        this.ordersTotal = data;
        console.log(data)

      },
      error: (err) => { console.log(err.error.error) }

    })

    this.addressserv.getaddressData().subscribe({
      next: (data) => {
        this.addressData = data
        console.log(data)
      }
    })
  }
  goToTrackOrder(orderId:any, _status:any){
    this.route.navigate(['main/profile/trackorder/', orderId],{ queryParams: { status: _status} });
  }


}
