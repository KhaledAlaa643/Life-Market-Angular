
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderadminService } from 'src/app/Services/orderadmin.service';
import { Order } from 'src/app/viewmodules/order';
import { User } from 'src/app/viewmodules/user';
import { Product } from 'src/app/Models/product';
import { Address } from 'src/app/viewmodules/address';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: any;
  orderForm: FormGroup;
  orderData: any;
  products: any;
  index: any
  user: any
  address: any
  constructor(private formBuilder: FormBuilder,
    private orderService: OrderadminService,
  ) {
    this.orderForm = this.formBuilder.group({
      status: ''
    });
  }


  ngOnInit(): void {

    this.orderService.getAllOrders().subscribe((data: any) => {
      this.orders = data;
      console.log(data)
    });

  }

  updateOrder(data: any, orderId: number) {

    this.orderService.updateOrder(data, orderId).subscribe({
      next: (order: Order) => {
        console.log(`Order ${orderId} status updated successfully`);
        console.log('Updated order:', order);
      },
      error: (error: any) => {
        console.log('Error updating order status:', error);
      }
    })
  }
  showOrderDetails(orderId: number) {
    this.orderService.getOrderDetails(orderId).subscribe({
      next: (data) => {
        console.log(data);
        this.orderData = data;
        this.displayOrderData();
      }
    })

  }
  displayOrderData() {

    Swal.fire({

      title: 'LIFE MARKET',
      html: `
      <br>
      <div class="row text-start">
        
          <p><strong style="color:#1f8291d4;"> Name:</strong> 
          ${this.orderData[0].first_name} 
          ${this.orderData[0].last_name}</p>
          <p><strong style="color:#1f8291d4;">Email:</strong>
           ${this.orderData[0].email}</p>
          <p><strong style="color:#1f8291d4;">Phone:</strong>
           ${this.orderData[0].phone}</p>
          
         <br><br>
          <p><strong style="color:#1f8291d4;">Address:  </strong>
          ${this.orderData[0].street}, ${this.orderData[0].city}, 
          ${this.orderData[0].governorate} </p>
          <p><strong style="color:#1f8291d4;">Zip code: </strong>
           ${this.orderData[0].zip_code}</p>
          <br><br>
          <p><strong >Date: </strong> 
          ${this.orderData[0].created_at}</p>
         
        </div>
        <section class="container-fluid">
        <table class="w-100 mt-3 table table-bordered table-hover table-striped text-center">
            <thead>
            <tr style="text-transform:capitalize;" class="bg-white ">
                
                <th>No</th>
                <th>img</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                
            </tr>
        </thead>
        <tbody>
        ${this.orderData.map((product: any, i: number) => `
            <tr>
              <td>${i + 1}</td>
              <td><img src="../../../assets/prd10.jpg" width="40px"></td>
              <td>${product.name}</td>
              <td>${product.price}</td>
              <td>${product.total_quantity}</td>
              <td>${product.totaled}</td>
            </tr>
          `).join('')
        }
      </tbody>
        </table>
         
      
    `,
      confirmButtonText: 'OK',
      backdrop: `
    
     rgba(0,0,123,0.4)
      url("https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif")
      center center
      no-repeat
    `,
      customClass: {
        title: 'my-title-class',
        htmlContainer: 'my-html-container-class',
        confirmButton: 'my-confirm-button-class',
      },


      width: '600px',


    });
  }
}