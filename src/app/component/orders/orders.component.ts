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

  order:Order={} as Order;
  favitem:Product[]=[] 

  constructor(private Orderserve:OrdersService,private route: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.Orderserve.getOrders().subscribe({
      next: (data) => { 
        this.order=data
        console.log(data)

      },
      error: (err) => {console.log(err.error.error)}
    })

    
  }

  }