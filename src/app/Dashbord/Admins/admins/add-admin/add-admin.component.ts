import { Component } from '@angular/core'
import { Router } from '@angular/router'
import Swal from 'sweetalert2'
import { Location } from '@angular/common'
import { Admin } from 'src/app/Models/admin'
import { AdminService } from 'src/app/Services/admin.service'
import { UserService } from 'src/app/services/user.service'

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
    private route:Router,
    private userserve: UserService, 
  ) {}
  goBack()
  {
    this.location.back()
  }
  saveAdmin()
  {
    this.admin.type = "admin";
    this.userserve.createUser(this.admin).subscribe({
      next: (data) => { 
        // console.log(data)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Added Successfully',
          showConfirmButton: false,
          timer: 1500,
        }).then(()=>{
          this.router.navigate(['/admin/admin'])
        });
      },
      error: (err) => {
        // console.log(err.error.error)
        Swal.fire({
          icon: 'error',
          title: 'Email Alredy Existed',
        })
      }
    })
  }

}
