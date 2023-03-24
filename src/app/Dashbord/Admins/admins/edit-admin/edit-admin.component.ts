import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router'
import { Admin } from 'src/app/Models/admin'
import { AdminService } from 'src/app/Services/admin.service'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css'],
})
export class EditAdminComponent implements OnInit {
  admin: Admin[] = []
  backupAdmin: any
  id!: any
  constructor(
    private adminService: AdminService,
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
    this.adminService.getAdmins().subscribe((admins) => {
      this.backupAdmin = admins.find((e: any) => e.id === this.id)
    })
  }
  goBack()
  {
    this.location.back()
  }

  update()
  {
    this.adminService.updateAdmin(this.id, this.backupAdmin).subscribe({
      next:(res) => {
        this.backupAdmin = res
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Updated Successfully',
          showConfirmButton: false,
          timer: 1500,
        }).then(()=>{
          this.router.navigate(['/admin/admin'])
        });
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
}
