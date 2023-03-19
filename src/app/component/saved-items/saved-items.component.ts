import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaveditemsService } from 'src/app/Services/saveditems.service';
import { Item } from 'src/app/viewmodules/item';
import { Product } from 'src/app/Models/product';
@Component({
  selector: 'app-saved-items',
  templateUrl: './saved-items.component.html',
  styleUrls: ['./saved-items.component.css']
})
export class SavedItemsComponent implements OnInit {
  item:Item={} as Item;
  favitem:Product[]=[]

  constructor(private saveitem:SaveditemsService,private route: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.saveitem.getSavedItem().subscribe({
      next: (data) => { 
        this.item=data
        console.log(data)

      },
      error: (err) => {console.log(err.error.error)}
    })

    
  }

  }