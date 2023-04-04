import { Component } from '@angular/core';
import { PasswordService } from 'src/app/Services/password-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-password-component',
  templateUrl: './new-password-component.component.html',
  styleUrls: ['./new-password-component.component.css']
})
export class NewPasswordComponentComponent {
  password: any
  password_confirmation: any
  email: any
  constructor(private passwordService: PasswordService, private router: Router) { }
  submitForm() {
    this.email = localStorage.getItem('email');

    this.passwordService.createNewPassword(this.email, this.password, this.password_confirmation).subscribe({
      next: response => {
        if (response.reset_password) {
          this.router.navigate(['/login'])
        } 
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Password Not Match',

          })
        }
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password Not Match',

        })
      }
    })
  }
}