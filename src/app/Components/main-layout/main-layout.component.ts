import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { CategoryiesService } from 'src/app/Services/categoryies.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  cat: Category[] = []
  filterCat!:any;
  subCat: Category[] = []
  subFilterCat!:any;

  constructor(private _categoryServ:CategoryiesService){}

  ngOnInit(): void {
        
  }


}
