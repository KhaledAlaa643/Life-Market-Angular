import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryManagementService } from 'src/app/Services/category-management.service';
import { SubCatManageService } from 'src/app/Services/sub-cat-manage.service';

@Component({
  selector: 'app-create-sub-category',
  templateUrl: './create-sub-category.component.html',
  styleUrls: ['./create-sub-category.component.css']
})
export class CreateSubCategoryComponent  implements OnInit{
  constructor(private router: ActivatedRoute,
    private catmanage: CategoryManagementService,
    private http: HttpClient,
    private route: Router,
    private subCatmanage: SubCatManageService) {

  }
  SubCatId = '';
  Subcat = {
    name:'',
    cat_id:'',
    description:'',
  }
  categories!: null;

  ngOnInit(): void {
    this.catmanage.getCategories().subscribe({
      next: (data) => {
        this.categories = data

      }
    })
  }
  createSubCat() {


    this.subCatmanage.createSubCat(this.Subcat).subscribe({
      next: (data) => {

        this.route.navigate(['/admin/sub-categories-management'])
      },
      error: (err) => {
        console.log(err.error.error)
      }
    })
  }
}
