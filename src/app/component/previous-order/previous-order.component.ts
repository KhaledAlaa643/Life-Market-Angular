import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/Services/orders.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-previous-order',
  templateUrl: './previous-order.component.html',
  styleUrls: ['./previous-order.component.css']
})
export class PreviousOrderComponent implements OnInit {

  prd: any;

  constructor(
    private Orderserve: OrdersService,
    private route: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.Orderserve.getOrdersByUser().subscribe({
      next: (res) => {
        console.log(res);
        this.prd = res;


      },
      error: (err) => { console.log(err.error.error) }
    })
  }

  rateProduct(prd_id: any) {
    console.log(prd_id);
    Swal.fire({

      title: 'Rating',
      html: `
        <form>
          <div class="mb-3">
            <textarea class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
          </div>
          <div>
            <button type="submit" class="btn fs-4 m-0 p-0"><i class="fa-solid fa-star"></i></button>
            <button type="submit" class="btn fs-4 m-0 p-0"><i class="fa-solid fa-star"></i></button>
            <button type="submit" class="btn fs-4 m-0 p-0"><i class="fa-solid fa-star"></i></button>
            <button type="submit" class="btn fs-4 m-0 p-0"><i class="fa-solid fa-star"></i></button>
            <button type="submit" class="btn fs-4 m-0 p-0"><i class="fa-solid fa-star"></i></button>
          </div>
        </form>
      `,
      showConfirmButton: false,
      customClass: {
        title: 'my-title-class',
        htmlContainer: 'my-html-container-class',
        confirmButton: 'my-confirm-button-class',
      },
    });
  }

}
