import { Component, OnInit } from '@angular/core';
import { Category, SubCategory } from 'src/app/Models/category';
import { CategoryiesService } from 'src/app/Services/categoryies.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit  {

  cat: Category[] = [];
  subCat: SubCategory[] = [];


  constructor(
    private _categoryServ: CategoryiesService,
  ){}


  ngOnInit(): void {
    this._categoryServ.getAllCategorys().subscribe({
      next: (res) => {
        this.cat = res;
        // console.log(res);
      }
    });
    this._categoryServ.getAllSubCategorys().subscribe({
      next: (res) => {
        this.subCat = res;
        // console.log(res);
      }
    });
  }
  
}
