import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryManagementService } from 'src/app/Services/category-management.service';

@Component({
  selector: 'app-categories-management',
  templateUrl: './categories-management.component.html',
  styleUrls: ['./categories-management.component.css']
})
export class CategoriesManagementComponent implements OnInit {

  constructor(private http: HttpClient,
    private route: Router,
    private catmanage: CategoryManagementService) { }

  Allcategories!: Array<any>;

  ngOnInit(): void {
    this.catmanage.getCategories().subscribe({
      next: (data) => {
        this.Allcategories = (data)
      }
    })
  }

  deleteCat(id: number) {
    this.catmanage.deleteCat(id).subscribe({
      next: () => {
        window.location.reload()
      }
    })
  }



}
