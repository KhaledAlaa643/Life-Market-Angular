import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   HttpClientModule,

  ],
  providers: [
    {
      provide :HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
