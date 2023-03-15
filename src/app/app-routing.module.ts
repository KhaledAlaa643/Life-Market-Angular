import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/errors/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';



const routes: Routes = [
  {path: '', redirectTo:"/main", pathMatch:"full"},
  {path: 'main', component:MainLayoutComponent, children: [
    {path: 'home', component:HomeComponent},
    
  ]},
  {path: '**', component:NotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
