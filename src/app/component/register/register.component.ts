
import { Component } from '@angular/core';
import { User } from 'src/app/viewmodules/user';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent   {

  user:User={} as User;
  res!:any;


  constructor(
    private userserve: UserService, 
    private route: Router,
    private http: HttpClient
  ){ }


  createUser() {
    this.user.type = "user";
    this.userserve.createUser(this.user).subscribe({
      next: (data) => { 
        // console.log(data)
        this.route.navigate(['/login'])
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Email Alredy Existed',
        })
      }
    })
  }

}






