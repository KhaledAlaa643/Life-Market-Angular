import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaveditemsService } from 'src/app/Services/saveditems.service';
import { Item } from 'src/app/viewmodules/item';
import { Product } from 'src/app/Models/product';
import { ProductsService } from 'src/app/Services/products.service';
@Component({
  selector: 'app-saved-items',
  templateUrl: './saved-items.component.html',
  styleUrls: ['./saved-items.component.css']
})
export class SavedItemsComponent implements OnInit {

  item: Item = {} as Item;
  favitem: Product[] = []

  prd: any;


  constructor(
    private _productServ: ProductsService,
    public httpclient: HttpClient,
    private activatRoute: ActivatedRoute,
    private router: Router,
    private saveitem: SaveditemsService
  ) { }


  ngOnInit(): void {
    this.saveitem.getSavedItem().subscribe({
      next: (res) => {
        this.prd = res;
        console.log(this.prd)
      },
      error: (err) => { console.log(err.error.error) }
    })
  }

  goToPrdDetails(id:any){
    this.router.navigate(['main/product/', id]);
  }

  deletFavItem(id:any){
    this.saveitem.deletFavItem(id).subscribe({
      next:(data)=>{
        // this.router.navigate(['/main/profile/myaccount']);
        window.location.reload();


      }
  })

  }
}
