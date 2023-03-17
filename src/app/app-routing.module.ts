import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RequestPasswordResetComponent } from './component/request-password-reset/request-password-reset.component';


const routes:Routes=[
  {path:"",redirectTo:"login",pathMatch:'full'},

    {path:'register',component:RegisterComponent, canActivate: [AuthGuard]},
    {path:'login',component:LoginComponent},
    {path:'reset-Password-Request',component:RequestPasswordResetComponent},

];




@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]

})


export class AppRoutingModule {


}
