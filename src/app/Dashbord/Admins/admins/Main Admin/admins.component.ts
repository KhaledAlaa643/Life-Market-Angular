import { Component,OnInit } from '@angular/core';
import { Admin } from 'src/app/Models/admin';
import { AdminService } from 'src/app/Services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
admins:Admin[] = []
first_name: string = "";
last_name: string = "";
email: string = "";
password:string = ""
password_confirmation: string = "";
type: string = "";
constructor(private AdminService:AdminService){}
ngOnInit(): void {
  this.AdminService.getAdmins().subscribe((admins) => {
    this.admins = admins
  })

}
deleteAdmin(adminId: any) {
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
      this.AdminService.deleteAdmins(adminId).subscribe({
        next: (res) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'The Admin has been deleted Successfully',
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
