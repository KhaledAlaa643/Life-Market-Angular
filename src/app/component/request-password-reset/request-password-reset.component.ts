import { Component } from '@angular/core';
import { PasswordResetService } from 'src/app/Services/password-reset.service';

@Component({
  selector: 'app-request-password-reset',
  templateUrl: './request-password-reset.component.html',
  styleUrls: ['./request-password-reset.component.css']
})
export class RequestPasswordResetComponent {

  public user = {
    email: null
};
  constructor(private resetPasswordServ:PasswordResetService){}
  wrongCredentials:any=null;
  onSubmit(){
this.resetPasswordServ.sendPasswordResetLink(this.user).subscribe({
  next:(response)=>{
     console.log(response)
     this.handleResponse(response)
  },
  error:(err)=>{console.log(err.error.error)}
})
  }
  handleResponse(res: any){
    this.user.email=null;
  }

}
