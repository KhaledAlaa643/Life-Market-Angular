import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryManagementService } from 'src/app/Services/category-management.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  cat = {
    name: '',
    photo: '',
    description: '',
    id: null
  }
  constructor(private router: ActivatedRoute,
    private catmanage: CategoryManagementService,
    private http: HttpClient,
    private route: Router) { }
  createCat() {

    const formData = new FormData();
    formData.append('name',this.cat['name']);
    formData.append('photo', this.file, this.file.name);
    formData.append('description',this.cat['description']);
    this.catmanage.createCat(formData).subscribe({
      next: () => {
        this.route.navigate(['/admin/categories-management'])

      },
      error: (err) => {
        console.log(err.error.error)
      }

    })

  }
  file!: any;

  uploadimg(event: any) {
    this.file = event.target.files[0];

  }

}
