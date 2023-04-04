import { Component } from '@angular/core';
import { PasswordService } from 'src/app/Services/password-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password-component',
  templateUrl: './reset-password-component.component.html',
  styleUrls: ['./reset-password-component.component.css']
})
export class ResetPasswordComponentComponent {
  email:any;
  otp:any;
  
  constructor(private passwordService: PasswordService, private router: Router) { }
  submitForm() {
    this.email= localStorage.getItem('email');
   
    this.passwordService.resetPassword(this.email,this.otp).subscribe({
      next: response => {
        if (response.valid_code){
          this.router.navigate(['password'])  
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid Code,Enter Correct Code',
           
          })
        }
      }
    })
  }
}