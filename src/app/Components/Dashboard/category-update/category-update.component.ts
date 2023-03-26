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
    const formData = new FormData();
    formData.append('name',this.cat['name']);
    formData.append('photo', this.file, this.file.name);
    formData.append('description',this.cat['description']);
    formData.append('id',this.recieved_id);


    this.catmanage.updateCat(formData).subscribe({
      next: () => {
        this.route.navigate(['/admin/categories-management'])
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
