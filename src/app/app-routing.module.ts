import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:"",redirectTo:"register",pathMatch:'full'},

    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent}
  
]; 

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
  
})


export class AppRoutingModule { 
  
  
}
