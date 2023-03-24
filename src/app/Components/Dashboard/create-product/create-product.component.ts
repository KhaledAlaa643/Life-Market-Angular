import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryManagementService } from 'src/app/Services/category-management.service';
import { ProductsManagementService } from 'src/app/Services/products-management.service';
import { SubCatManageService } from 'src/app/Services/sub-cat-manage.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private router: ActivatedRoute,
    private catmanage: CategoryManagementService,
    private http: HttpClient,
    private route: Router,
    private subCatmanage: SubCatManageService,
    private prdmanage:ProductsManagementService) {

  }

  product = {
    name:'',
   sub_cat_id:'',
    description:'',
    photo:'',
    brand:'',
    quantity:'',
    price:'',
    price_before_discount:'',

  }
 subCat!:null;

  ngOnInit(): void {

    this.subCatmanage.getSubCategories().subscribe({
      next: (data) => {
        this.subCat = data
        console.log(data)

      },
      error:(err)=>{
        console.log(err.error.error)
      }
    })
  }
  createproduct() {

console.log(this.product)
    this.prdmanage.createProduct(this.product).subscribe({
      next: (data) => {
        this.route.navigate(['/dashboard/products-management'])

      },
      error: (err) => {
        console.log(err.error.error)
      }
    })
  }
  files!:any;
  uploadimg(event:any){
    this.files=event.target.files[0];
    console.log(this.files)
    this.product['photo']=this.files['name']
    }
}
