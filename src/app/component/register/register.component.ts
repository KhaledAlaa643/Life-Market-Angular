
import { Component} from '@angular/core';
import { User } from 'src/app/viewmodules/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent   {
user:User={} as User;
res!:any;
constructor(private userserve:UserService,private route:Router){}
 
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
  ///////////////
  
}





