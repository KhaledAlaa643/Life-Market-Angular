import { Component } from '@angular/core'
import { Router } from '@angular/router'
import Swal from 'sweetalert2'
import { Location } from '@angular/common'
import { Admin } from 'src/app/Models/admin'
import { AdminService } from 'src/app/Services/admin.service'

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css'],
})
export class AddAdminComponent {
  admin: Admin = {} as Admin
  constructor(
    private adminService: AdminService,
    private router: Router,
    private location: Location,
  ) {}
  goBack()
  {
    this.location.back()
  }
  saveAdmin()
  {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Added Successfully',
      showConfirmButton: false,
      timer: 1500,
    })
    this.adminService.saveAdmin(this.admin).subscribe({
      next: (res) => {
        console.log(res)
      },
    })
  }

}
