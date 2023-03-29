
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderadminService } from 'src/app/Services/orderadmin.service';
import { Order } from 'src/app/viewmodules/order';
import { User } from 'src/app/viewmodules/user';
import { Product } from 'src/app/Models/product';
import { Address } from 'src/app/viewmodules/address';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  selectedStatus: string = "";
  filteredOrders: Order[] = [];

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
      // console.log(data);
      this.filteredOrders = this.orders;

      // Set the value of the status form control to the selected status when filtering
      this.orderForm.get('status')?.valueChanges.subscribe((status: string) => {
        this.selectedStatus = status;
        this.applyFilter();
      });
    });

  }





  applyFilter() {
    if (this.selectedStatus) {
      this.filteredOrders = this.orders.filter((orders: { status: string; }) => orders.status === this.selectedStatus);
    } else {
      this.filteredOrders = this.orders;
    }
  }
  updateOrder(data: any, orderId: number) {

    this.orderService.updateOrder(data, orderId).subscribe({
      next: (order: Order) => {
        console.log(`Order ${orderId} status updated successfully`);
        console.log('Updated order:', order);
        window.location.reload();
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
    const createdDate = new Date(this.orderData[0].created_at);
    const deliveryDays = this.orderData[0].delivery_time;
    const deliveryDate = new Date(createdDate.getTime() + deliveryDays * 24 * 60 * 60 * 1000);
    const deliveryTime = deliveryDate.toISOString().slice(0, 19).replace('T', ' ');

    Swal.fire({

      title: 'LIFE MARKET',
      html: `
      <div class="row text-start m-0 p-0">
        <table class="table">
          <tbody>
            <tr>
              <td style="color:#1f8291d4;">Name</td>
              <td>${this.orderData[0].first_name} ${this.orderData[0].last_name}</td>
            </tr>
            <tr>
              <td style="color:#1f8291d4;">Email</td>
              <td>${this.orderData[0].email}</td>
            </tr>
            <tr>
              <td style="color:#1f8291d4;">Phone</td>
              <td>${this.orderData[0].phone}</td>
            </tr>
            <tr>
              <td style="color:#1f8291d4;">Address</td>
              <td>${this.orderData[0].street}, ${this.orderData[0].city}, ${this.orderData[0].governorate}</td>
            </tr>
            <tr>
              <td style="color:#1f8291d4;">Zip Code</td>
              <td>${this.orderData[0].zip_code}</td>
            </tr>
            <tr>
              <td style="color:#1f8291d4;">Order Date</td>
              <td>${this.orderData[0].created_at}</td>
            </tr>
            <tr>
              <td style="color:#1f8291d4;">Delivery Time</td>
              <td>${deliveryTime}</td>
            </tr>
            <tr>
              <td style="color:#1f8291d4;">Delivery Price</td>
              <td>${this.orderData[0].delivery_price}</td>
            </tr>
            <tr>
              <td style="color:#1f8291d4;">Order Total</td>
              <td>${this.orderData[0].order_total}</td>
            </tr>
          </tbody>
        </table>
        <section class="container-fluid">
        <table class="w-100 mt-2 mx-0 px-0 table table-bordered table-hover table-striped text-center">
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
              <td><img src="http://localhost:8000/storage/images/products/${product.product_photo}" width="40px"></td>
              <td>${product.product_name}</td>
              <td>${product.product_price}</td>
              <td>${product.quantity}</td>
              <td>${product.quantity * product.product_price}</td>
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