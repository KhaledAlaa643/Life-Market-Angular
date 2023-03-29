import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/Services/address.service';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {

  orderStatus!: any;
  orderId!: any;

  constructor(
    private Orderserve: OrdersService,
    private route: Router,
    private http: HttpClient,
    private addressserv: AddressService,
    private activatRoute:ActivatedRoute, 
    ) { }

  ngOnInit(): void {
    this.orderId = String(this.activatRoute.snapshot.paramMap.get('id'));
    this.orderStatus = String(this.activatRoute.snapshot.queryParamMap.get('status'));
    console.log(this.orderStatus);
    
  }
  
}
