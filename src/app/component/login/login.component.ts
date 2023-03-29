import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/viewmodules/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user: User = {} as User;
  res!: any;
  wrongCredentials: any = null;
  constructor(private userserve: UserService, private route: Router, private http: HttpClient) { }
  login() {
    this.userserve.login(this.user).subscribe({
      next: (data: any) => {

        this.res = data;
        if (this.res['token']) {
          // console.log(this.res)

          localStorage.setItem('token', this.res['token'])
          localStorage.setItem('userId', this.res['user']['id'])
          localStorage.setItem('userName', this.res['user']['first_name'])


          if(this.res['user']['type']=="admin"){
            this.route.navigate(['/admin/dashboard'])
          }
          else{
            this.route.navigate(['/main/home'])
          }
          
          // console.log(this.res)
        }
        else {

          this.wrongCredentials = "Please, Enter a Valid Email or Password"
        }
      }
    })


  }

}
