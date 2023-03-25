import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryManagementService } from 'src/app/Services/category-management.service';
import { ProductsManagementService } from 'src/app/Services/products-management.service';
import { SubCatManageService } from 'src/app/Services/sub-cat-manage.service';

@Component({
  selector: 'app-products-management',
  templateUrl: './products-management.component.html',
  styleUrls: ['./products-management.component.css']
})
export class ProductsManagementComponent implements OnInit {

  constructor(private http: HttpClient,
    private route: Router,
    private prdManage: ProductsManagementService,
    private catmanage: CategoryManagementService,
    private subcatmanage: SubCatManageService) { }
  //for selection
  categoriesNames!: any;
  SubcategoriesNames!: any;

  //selection visibility
  SubcategoriesNamesVisibility: boolean = false;
  categoriesNamesVisibility: boolean = false;
  AllProducts!: Array<any>;

  //filtration selection
  selectedCat!: number;
  selectedSubCat!: number;

  ngOnInit(): void {
    this.prdManage.getAllProducts().subscribe({
      next: (data: any) => {
        this.AllProducts = data;
      }
    })

    this.catmanage.getCategories().subscribe({
      next: (data) => {
        // console.log(data)
        this.categoriesNames = (data)

      }
    })
    this.subcatmanage.getSubCategories().subscribe({
      next: (data) => {
        // console.log(data)
        this.SubcategoriesNames = data
      }
    })
  }

  Categoryfiltration() {
    this.categoriesNamesVisibility = true;
    this.SubcategoriesNamesVisibility = false;
  }
  SubCategoryfiltration() {
    this.SubcategoriesNamesVisibility = true;
    this.categoriesNamesVisibility = false;
  }
  categoryFilteredPrd() {
    this.prdManage.getProductsByCat(this.selectedCat).subscribe({
      next: (res) => {
        // this.AllProducts = res;
        // console.log(res)
        if (res[0].price>0) {
          console.log(res)
          this.AllProducts = res
        } else {
          this.AllProducts = [];
          console.log(res)
        }
        // console.log(res)
      }
    })
  }
  SubcategoryFilteredPrd() {
    this.prdManage.getProductsBySubCat(this.selectedSubCat).subscribe({
      next: (res) => {
        if (res['message']) {
          console.log(res)
          this.AllProducts = []
        } else {
          this.AllProducts = res;

        }
        console.log(res)
      }
    })
  }
  getAllProducts() {
    this.categoriesNamesVisibility = false;
    this.SubcategoriesNamesVisibility = false;

    this.prdManage.getAllProducts().subscribe({
      next: (data: any) => {
        this.AllProducts = data;
      }
    })
  }
  deletePrd(prdId: number) {
    this.prdManage.deleteprd(prdId).subscribe({
      next: () => {
        window.location.reload()
      }
    })
  }
  editPrd(prdId: number) { }
}
