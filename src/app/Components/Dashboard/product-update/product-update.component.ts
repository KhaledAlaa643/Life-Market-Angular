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
  price!:any;
  quantity!:any;
  updateproduct() {

    const formData = new FormData();
    formData.append('name',this.product['name']);
    formData.append('photo', this.file, this.file.name);
    formData.append('brand',this.product['brand']);
    formData.append('sub_cat_id',this.product['sub_cat_id']);
    formData.append('description',this.product['description']);
    formData.append('id',this.received_id);
    this.price=this.product['price'];
    this.quantity=this.product['quantity'];
    formData.append('price',this.price);
    formData.append('quantity',this.quantity);

    this.prdmanage.updateProduct(formData).subscribe({
      next: (data) => {
         console.log(data)
        this.route.navigate(['/admin/products-management'])
      },
      error: (err) => {
        console.log(err.error.error)
      }
    })
  }
  file!:File;
  uploadimg(event:any){
    this.file=event.target.files[0];

    }
}
