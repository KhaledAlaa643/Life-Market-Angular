import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes:Routes=[
  {path:"",redirectTo:"login",pathMatch:'full'},

    {path:'register',component:RegisterComponent, canActivate: [AuthGuard]},
    {path:'login',component:LoginComponent}

];




@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]

})


export class AppRoutingModule {


}
