import { Component } from '@angular/core';
import { PasswordService } from 'src/app/Services/password-service.service';
import { User } from 'src/app/viewmodules/user';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password-component',
  templateUrl: './forget-password-component.component.html',
  styleUrls: ['./forget-password-component.component.css']
})
export class ForgetPasswordComponentComponent {
  email!: string;
  user: User = {} as User;
  constructor(private passwordService: PasswordService, private router: Router) { }

  submitForm() {
    this.passwordService.forgetPassword(this.email).subscribe({
      next: response => {
        localStorage.setItem('email', this.email)

        this.router.navigate(['reset'])  
    
      },
      error: error => console.log(error)
    });
  }
}

