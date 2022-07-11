import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { NavBarComponent } from '../core/nav-bar/nav-bar.component';
import { ShopService } from '../shop/shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
datas:any;
GrandTotal:number=0;
cart1:boolean;
product:any;
count:number=0;
private loading: boolean=false;

  constructor(public service:CartService,private router:Router ) { 
  }

  ngOnInit(): void {
    this.service.iscart=true;
    this.getCartProduct();
}
getCartProduct()
{
  this.service.GetcartforUser(1000).subscribe({
    next:
    (data)=>{
      //Initiate Grandtotal to 0 because Every Time api is hitted it will add all subtotal getting in api
    this.GrandTotal=0;
    console.log(data);
    this.datas=data; 
    this.datas.forEach(element => {
      this.GrandTotal=element.subTotal+this.GrandTotal
    });
  },error(err){
 console.log(err)
  }});
}


Removeitem(PdtId : number):void{
  this.loading=true
  this.service.RemoveCartItem(PdtId,1000).subscribe(data=>{
    this.loading=true
    console.log(data);
    //If api is hitted succcesfully just recalculate grandtotal and re render new table 
    if(data!=null)
    {
      this.loading=false;
      
      this.ngOnInit();
    }
    })
  

   //window.location.reload();
}
goToaddress(){
    
  this.router.navigate(['/','address'])
}


}