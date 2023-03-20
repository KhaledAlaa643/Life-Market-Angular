import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Order } from 'src/app/viewmodules/order';
import { Product } from 'src/app/Models/product';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
tablevisible!:boolean;
cardvisible!:boolean;
  orders!:any;
  ordersTotal!:any;
  favitem:Product[]=[]

  constructor(private Orderserve:OrdersService,private route: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.Orderserve.getOrders().subscribe({
      next: (data) => {
        this.orders=data
        if(this.orders['message']){
           this.cardvisible=true;
           this.tablevisible=false;
        }else{
          this.cardvisible=false;
           this.tablevisible=true;
        }
        console.log(this.orders)

      },
      error: (err) => {console.log(err.error.error)}
    })

this.Orderserve.getOrdersTotal().subscribe({
  next: (data) => {
  this.ordersTotal=data;
    console.log(this.ordersTotal)

  },
  error: (err) => {console.log(err.error.error)}

})
  }

  }
