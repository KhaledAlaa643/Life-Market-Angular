import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { Delivery } from 'src/app/Models/delivery';
import { DeliveryService } from 'src/app/Services/delivery.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  delivery:Delivery[] = []
  governorate: string = "";
  price: string = "";
  time: any



  constructor(private deliveryService:DeliveryService){}
  ngOnInit(): void {
    this.deliveryService.getDeliverys().subscribe((delivery) => {
      this.delivery = delivery
    })

  }
  deleteDelivery(DeliveryId: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'darkcyan',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deliveryService.deleteDelivery(DeliveryId).subscribe({
          next: (res) => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'The delivery price has been deleted Successfully',
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              window.location.reload();
            })
          },
          error: (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong, '+err,
            })
          }
        })
      }
    })
  }





}
