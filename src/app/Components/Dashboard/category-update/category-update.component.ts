import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryManagementService } from 'src/app/Services/category-management.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit{

  constructor(private router: ActivatedRoute,
    private catmanage: CategoryManagementService,
    private http: HttpClient,
    private route: Router) {

  }
  CatId = '';
  cat = {
    name: '',
    photo: '',
    description: '',
    id: null
  }
  recieved_id!: any;
  ngOnInit(): void {

    this.recieved_id = this.router.snapshot.paramMap.get('id')
    if (this.recieved_id !== null) {
      this.cat['id'] = this.recieved_id

      this.catmanage.getCategoryById(this.recieved_id).subscribe({
        next: (res) => {
          this.cat = res
          console.log(this.cat)
        },
        error:(err)=>{
          console.log(err.error.error)
        }
      });
    }

  }
  updateCat() {

    this.catmanage.updateCat(this.cat).subscribe({
      next: () => {
        this.route.navigate(['/dashboard/categories-management'])
      },
      error: (err) => {
        console.log(err.error.error)
      }
    })
  }
}
