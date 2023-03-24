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
        Swal.fire('Deleted!', 'The Admin has been deleted.', 'success');
        this.deliveryService.deleteDelivery(DeliveryId).subscribe(() => {
          const index = this.delivery.findIndex((p) => p.id === DeliveryId)
          if (index !== -1) {
            this.delivery.splice(index, 1)
          }
        })
      }
    })
  }





}
