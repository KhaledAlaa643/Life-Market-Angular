import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryManagementService } from 'src/app/Services/category-management.service';
import { SubCatManageService } from 'src/app/Services/sub-cat-manage.service';

@Component({
  selector: 'app-sub-category-update',
  templateUrl: './sub-category-update.component.html',
  styleUrls: ['./sub-category-update.component.css']
})
export class SubCategoryUpdateComponent implements OnInit{
  constructor(private router: ActivatedRoute,
    private catmanage: CategoryManagementService,
    private http: HttpClient,
    private route: Router,
    private subCatmanage: SubCatManageService) {

  }
  SubCatId = '';
  Subcat = {
    name: '',
    cat_id: '',
    description: '',
    id: null
  }
  categories!: null;
  recieved_id!: any;
  ngOnInit(): void {

    this.recieved_id = this.router.snapshot.paramMap.get('id')
    if (this.recieved_id !== null) {
      this.Subcat['id'] = this.recieved_id

      this.subCatmanage.getSubCategoryById(this.recieved_id).subscribe({
        next: (reqPrd) => {
          this.Subcat = reqPrd
        }
        });
      }

    this.catmanage.getCategories().subscribe({
      next: (data) => {
        this.categories = data

      }
    })
  }
  updateSubCat() {

    this.subCatmanage.updateSubCat(this.Subcat).subscribe({
      next: (data) => {

        this.route.navigate(['/admin/sub-categories-management'])
      },
      error: (err) => {
        console.log(err.error.error)
      }
    })
  }
}
