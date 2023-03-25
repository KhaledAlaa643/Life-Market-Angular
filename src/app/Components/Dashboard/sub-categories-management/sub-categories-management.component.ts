import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryManagementService } from 'src/app/Services/category-management.service';
import { SubCatManageService } from 'src/app/Services/sub-cat-manage.service';

@Component({
  selector: 'app-sub-categories-management',
  templateUrl: './sub-categories-management.component.html',
  styleUrls: ['./sub-categories-management.component.css']
})
export class SubCategoriesManagementComponent {
  constructor(private http: HttpClient,
    private route: Router,
    private Subcatmanage: SubCatManageService) { }

  AllSubcategories!: Array<any>;

  ngOnInit(): void {
    this.Subcatmanage.getSubCategories().subscribe({
      next: (data) => {
        this.AllSubcategories = (data)
      }
    })
  }

  deleteSubCat(id: number) {
    console.log(id)
    this.Subcatmanage.deleteSubCat(id).subscribe({
      next: () => {
        window.location.reload()
      }
    })
  }
}
