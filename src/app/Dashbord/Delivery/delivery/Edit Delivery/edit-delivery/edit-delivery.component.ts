import { Component } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router'
import Swal from 'sweetalert2';
import { Delivery } from 'src/app/Models/delivery';
import { DeliveryService } from 'src/app/Services/delivery.service';
@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.component.html',
  styleUrls: ['./edit-delivery.component.css']
})
export class EditDeliveryComponent {
  delivery: Delivery[] = []
  backupDelivery: any
  id!: any
  constructor(
    private deliveryService: DeliveryService,
    private location: Location,
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
  ) {
    this.ActivatedRoute.params.subscribe((param) => {
      this.id = +param['id']
    })
  }
  ngOnInit(): void
  {
    this.deliveryService.getDeliverys().subscribe((delivery) => {
      this.backupDelivery = delivery.find((e: any) => e.id === this.id)
    })
  }
  goBack()
  {
    this.location.back()
  }
  update()
  {
    this.deliveryService.updateDelivery(this.id, this.backupDelivery).subscribe({
      next:(res) => {
        this.backupDelivery = res
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Updated Successfully',
          showConfirmButton: false,
          timer: 1500,
        }).then(()=>{
          this.router.navigate(['/admin/delivery'])
        })
      }
    })
    
  }
}
