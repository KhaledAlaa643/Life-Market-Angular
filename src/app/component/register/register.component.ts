
import { Component} from '@angular/core';
import { User } from 'src/app/viewmodules/user';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent   {
user:User={} as User;
res!:any;

constructor(private userserve:UserService,private route:Router,
   private http:HttpClient ){}

createUser(){
  this.userserve.createUser(this.user).subscribe({
    next:(data)=>{

      console.log(data)

      },
      error:(err)=>{
         console.log(err)
      }
    })

  }
  logout(){


    //  localStorage.removeItem('token');
    this.http.post('http://localhost:8000/api/logout',{'aml':'hi'}).subscribe({
      next:(data)=>{
       console.log(data)
       localStorage.removeItem('token');
       this.route.navigate(['/login'])
      },
      error:(err)=>{
             console.log(err.error)
      }
    })
    }
  ///////////////

}





