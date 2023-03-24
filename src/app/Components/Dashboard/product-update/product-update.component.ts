import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryManagementService } from 'src/app/Services/category-management.service';
import { ProductsManagementService } from 'src/app/Services/products-management.service';
import { SubCatManageService } from 'src/app/Services/sub-cat-manage.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {
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
id:''
  }
 subCat!:null;
received_id!:any
  ngOnInit(): void {

    this.received_id = this.router.snapshot.paramMap.get('id')
    if (this.received_id !== null) {
      this.product['id'] = this.received_id

      this.prdmanage.getProductById(this.received_id).subscribe({
        next: (reqPrd) => {
          this.product = reqPrd
        }
        });
      }
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
  updateproduct() {

console.log(this.product)
    this.prdmanage.updateProduct(this.product).subscribe({
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
