import { Component } from '@angular/core';
import { Customers } from 'src/app/Models/customers';
import { CustomerService } from 'src/app/Services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  customers:Customers[] = []
  first_name: string = "";
  last_name: string = "";
  email: string = "";
  password:string = ""
  password_confirmation: string = "";
  type: string = "";
  constructor(private customerService:CustomerService){}
  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers
    })

  }
  deleteCustomer(customerId: any) {
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
        this.customerService.deleteCustomer(customerId).subscribe(() => {
          const index = this.customers.findIndex((p) => p.id === customerId)
          if (index !== -1) {
            this.customers.splice(index, 1)
          }
        })
      }
    })
  }

}
