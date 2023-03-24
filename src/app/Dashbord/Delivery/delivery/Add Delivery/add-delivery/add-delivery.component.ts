import { Component } from '@angular/core';
import { Router } from '@angular/router'
import Swal from 'sweetalert2'
import { Location } from '@angular/common'
import { Delivery } from 'src/app/Models/delivery';
import { DeliveryService } from 'src/app/Services/delivery.service';
@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent {
  delivery: Delivery = {} as Delivery
  constructor(
    private deliveryService: DeliveryService,
    private router: Router,
    private location: Location,
  ) {}
  goBack()
  {
    this.location.back()
  }
  saveDelivery()
  {
    
    this.deliveryService.saveDelivery(this.delivery).subscribe({
      next: (res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Added Successfully',
          showConfirmButton: false,
          timer: 1500,
        }).then(()=>{
          this.router.navigate(['/admin/delivery'])
        })
        
      },
    })
  }
}
