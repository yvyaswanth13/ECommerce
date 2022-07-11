import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  basket$:any;
  currentUser$:string;
  constructor(private service:CartService,private route:Router) { }
  datas:any;
  GrandTotal:number=0;
  ngOnInit(): void {
    this.currentUser$=null;
    // this.service.Getcartcount(1000).subscribe(data=>{
    //   console.log(data);
    //   this.basket$=data;
    // })
  }
  
}

