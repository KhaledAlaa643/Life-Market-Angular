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


    this.catmanage.createCat(this.cat).subscribe({
      next: () => {
        this.route.navigate(['/dashboard/categories-management'])

      },
      error: (err) => {
        console.log(err.error.error)
      }

    })

  }
  files!: any;

  uploadimg(event: any) {
    this.files = event.target.files[0];
    console.log(this.files)
    this.cat['photo'] = this.files['name']
    console.log(this.cat['photo'])
  }

}
