import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/viewmodules/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user:User={} as User;
  res!:any;
  wrongCredentials:any=null;
constructor(private userserve:UserService,private route:Router){}
login(){
  var x=this.userserve.login(this.user).subscribe({
    next:(data)=>{
      
    this.res=data;
    if (this.res['token']) {
        // this.route.navigate(['/register'])
        console.log(this.res)
      }
      else{
        console.log("invaild email or password")
        this.wrongCredentials="please,Enter a valid Email or password"
      }
    }
  })
  
  
}

}
