import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductsService } from 'src/app/Services/products.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/viewmodules/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  user: User = {} as User;
  res!: any;
  topSellingProducts: Product[] = [];
  topSelling: Product[] = [];
  topRatingProducts: Product[] = [];
  topRating: Product[] = [];
  
  constructor(
    private userserve: UserService,
    private route: Router,
    private _productServ: ProductsService,
    private router:Router,
  ){}


  ngOnInit(): void {
    this._productServ.getTopSellingProducts().subscribe({
      next: (res) => {
        this.topSellingProducts = res;
        for(let i=0;i<6;i++){
          this.topSelling[i] = this.topSellingProducts[i];
        }
      }
    });
    this._productServ.getTopRatingProducts().subscribe({
      next: (res) => {
        this.topRatingProducts = res;
        for(let i=0;i<6;i++){
          this.topRating[i] = this.topRatingProducts[i];
        }
        // console.log(this.topSelling);
      }
    });
  }


  goToPrdList(_type:any, id:any){
    if(_type == "cat"){
      this.router.navigate(['main/products/list/category', id], { queryParams: { type: _type} });
    }
    else{
      this.router.navigate(['main/products/list', id], { queryParams: { type: _type} });
    }
  }


  goToPrdDetails(id:any){
    this.router.navigate(['main/product/', id]);
  }


  logoutFun() {
    return this.userserve.logout().subscribe({
      next: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        this.route.navigate(['/login'])

      },
      error: (err: any) => {
        console.log(err.error);
      }
    });
  }
}



