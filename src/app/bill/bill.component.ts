import { Component, OnInit } from '@angular/core';
import { OrderAPIService } from '../order-api.service';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  flag_get:boolean=false;
  flag_show:boolean=false;
  PM:string="COD"
  orders: any;
  userAddress:any;
  oItems:any;
  constructor(private service:OrderAPIService,private serv:OrderServiceService) { }
 public showBill(id:any,oid:any)
  {
    console.log(id)
    let resp=this.service.getAddByID(id);
    resp.subscribe(data=>{
      this.userAddress=data;
     console.log(this.userAddress)
    });
    this.flag_get=true;
let oiresp=this.service.getOItemsByID(oid);
oiresp.subscribe(data=>{
  this.oItems=data;
  console.log(this.oItems)});
    
  }

  public MyOrders()
  {
this.serv.goToOrders()
  }
  public closeNow()
  {
    this.flag_get=false;

  }
  public showOrderId()
  {
    this.flag_show=true;
  let resp=this.service.getOrdersByID(1000);
  resp.subscribe(data=>{
    this.orders=data;
    console.log(this.orders)
  });
  
}
//order:any
  ngOnInit(): void {
   /* let resp=this.service.getOrdersByID(1000);
    resp.subscribe(data=>{
      this.orders=data;
      console.log(this.orders)
    });*/
    //console.log(this.orders)
  
  }


  
}