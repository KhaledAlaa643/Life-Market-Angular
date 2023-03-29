import { Component } from '@angular/core';
import { Router } from '@angular/router'
import Swal from 'sweetalert2'
import { Location } from '@angular/common'
import { Customers } from 'src/app/Models/customers';
import { CustomerService } from 'src/app/Services/customer.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  customer: Customers = {} as Customers

  passwordForm: FormGroup;
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private location: Location,
    private fb: FormBuilder,
    private userserve: UserService, 
  ) {
    this.passwordForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }
  createForm() {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });


    this.passwordForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
   }, { validator: this.checkPasswords });



  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls['password'].value;
    let confirmPass = group.controls['confirmPassword'].value;
    return pass === confirmPass ? null : { notSame: true }
 }
  passwordMatchValidator(formGroup: FormGroup | any) {
    const password = formGroup.get('password').value;
    const confirmPassword = formGroup.get('confirmPassword').value;
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword').setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword').setErrors(null);
    }
  }
  goBack()
  {
    this.location.back()
  }
  saveCustomer()
  {
    
    this.customer.type = "user";
    this.userserve.createUser(this.customer).subscribe({
      next: (data) => { 
        // console.log(data)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Added Successfully',
          showConfirmButton: false,
          timer: 1500,
        }).then(()=>{
          this.router.navigate(['/admin/customer'])
        });
      },
      error: (err) => {
        // console.log(err.error.error)
        Swal.fire({
          icon: 'error',
          title: 'Email Alredy Existed',
        })
      }
    })
  }
}
