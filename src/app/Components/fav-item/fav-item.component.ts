import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/wishlist.service';

@Component({
  selector: 'app-fav-item',
  templateUrl: './fav-item.component.html',
  styleUrls: ['./fav-item.component.css']
})
export class FavItemComponent  implements OnInit {
  wishlistItems: string[] = [];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.wishlistItems = this.wishlistService.getWishlistItems();
  }
}
