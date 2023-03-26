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
    private prdmanage: ProductsManagementService) {

  }

  product:any = {
    name:'',
    sub_cat_id:'',
    description:'',
    photo:'',
    brand:'',
    quantity:'',
    price:'',
  }
  file!:File;
  subCat!: null;
  price!:any;
  quantity!:any;

  ngOnInit(): void {

    this.subCatmanage.getSubCategories().subscribe({
      next: (data) => {
        this.subCat = data
        // console.log(data)

      },
      error: (err) => {
        console.log(err.error.error)
      }
    })
  }
  createproduct() {

    const formData = new FormData();
    formData.append('name',this.product['name']);

    formData.append('photo', this.file, this.file.name);

    formData.append('brand',this.product['brand']);
    formData.append('sub_cat_id',this.product['sub_cat_id']);

    formData.append('description',this.product['description']);
    this.price=this.product['price'];
    this.quantity=this.product['quntity'];
    formData.append('price',this.price);
    formData.append('quantity',this.product['quantity']);

   


    this.prdmanage.createProduct(formData).subscribe({
      next: (data) => {
        console.log(data)
        this.route.navigate(['/admin/products-management'])

      },
      error: (err) => {
        console.log(err.error.error)
      }
    })
  }

  uploadimg(event: any) {
    this.file = event.target.files[0];



  }
}
