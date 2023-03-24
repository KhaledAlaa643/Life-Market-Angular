import { Component } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router'
import Swal from 'sweetalert2';
import { Customers } from 'src/app/Models/customers';
import { CustomerService } from 'src/app/Services/customer.service';
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent {
  customer: Customers[] = []
  backupCustomer: any
  id!: any
  constructor(
    private customerService: CustomerService,
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
    this.customerService.getCustomers().subscribe((customers) => {
      this.backupCustomer = customers.find((e: any) => e.id === this.id)
    })
  }
  goBack()
  {
    this.location.back()
  }

  update()
  {
    this.customerService.updateCustomer(this.id, this.backupCustomer).subscribe({
      next:(res) => {
        this.backupCustomer = res
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Updated Successfully',
          showConfirmButton: false,
          timer: 1500,
        }).then(()=>{
          this.router.navigate(['/admin/customer'])
        });
      }
    })
    
  }
}
