import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product:any

  constructor(private service:CartService,private route:Router) { }
  userId:1000;
  datas:any;
  display="none";
  
  ngOnInit(): void {
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  Viewproddetails(id:number):void{
    this.route.navigateByUrl("/view/"+id);
  }

  AddProdtoCart(ProductId:number):void{
    
    this.service.AddCart(ProductId,1000).subscribe(data=>{
      console.log(data);
      this.datas=data.result;
      })
  }
}
