import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DashboaedService } from 'src/app/Services/dashboaed.service';
import { ProductsService } from 'src/app/Services/products.service';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  usersCount:any;
  ordersCount:any;
  productsCount:any;
  totalIncome:any;
  chart1:any = [];
  chart2:any = [];
  prd2:any = [];
  prd2Count:any = [];
  

  constructor(
    private _messageServ:DashboaedService,
    private _productServ:ProductsService,
    ){}
  
  ngOnInit(): void {
    this._messageServ.getUsersCount().subscribe({
      next: (res) => {
        this.usersCount = res;
        console.log(res);

      }
    });
    this._messageServ.getOrderCount().subscribe({
      next: (res) => {
        this.ordersCount = res;
        console.log(res);

      }
    });
    this._messageServ.getProductCount().subscribe({
      next: (res) => {
        this.productsCount = res;
        console.log(res);

      }
    });
    this._messageServ.getTotalIncome().subscribe({
      next: (res) => {
        this.totalIncome = res;
        
        console.log(res);

      }
    });


    this._productServ.getTopSellingProducts().subscribe({
      next: (res) => {
        for(let i=0;i<10;i++){
          this.prd2[i]=res[i].name;
          this.prd2Count[i]=res[i].selling_count;
        }
        // this.prd2 = res.map((prd:any)=>prd.name)
        // this.prd2Count = res.map((prd:any)=>prd.selling_count)
        // const labels = Utils.months({count: 7});
        this.chart1 = new Chart('canvas1', {
          type: 'line',
          data: {
            labels: this.prd2,
            datasets: [{
              label: 'Customers',
              data: this.prd2Count,
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    });
    



    this._productServ.getTopSellingProducts().subscribe({
      next: (res) => {
        for(let i=0;i<10;i++){
          this.prd2[i]=res[i].name;
          this.prd2Count[i]=res[i].selling_count;
        }
        // this.prd2 = res.map((prd:any)=>prd.name)
        // this.prd2Count = res.map((prd:any)=>prd.selling_count)
        this.chart2 = new Chart('canvas2', {
          type: 'bar',
          data: {
            labels: this.prd2,
            datasets: [{
              label: 'Top Selling #10',
              data: this.prd2Count,
              borderWidth: 3,
            }]
          },
          options: {
            indexAxis: 'y',
          }
        });
      }
    });
    
  }

  

}
