import { Component, OnInit } from '@angular/core';
import { Address } from '../Address';
import { OrderAPIService } from '../order-api.service';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {


  public myaddress: Address={
    addressLine1: "" ,
        addressLine2: "",
        city :  "" ,
        postalCode :  "" ,
        country :  "" ,
        mobile :  "" ,
        mailId :  "" ,
        contactPerson :  "",
        userId:0
      };
      public response:string="";
  
  constructor(private ser:OrderAPIService) { }
  private service!: OrderServiceService;
  message: string="";
  userId:number=1000;
  public goToOrders(){
    console.log(this.myaddress)
    let resp=this.ser.addAddress(this.myaddress,this.userId);
    resp.subscribe(data=>{
    this.message=data.toString();
    console.log(this.message)
  //this.ser.message=this.message;
   
      });
    
  this.ser.goToBill();
   
  }
 

  ngOnInit(): void {
  }

}
