import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/service/cartservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
  export class NavbarComponent implements OnInit {

    public numberOfProducts: number = 0;

    constructor(private cartservice: CartserviceService) {}

    ngOnInit(): void {
      this.cartservice.getProducts()
      .subscribe(res=>{
        this.numberOfProducts = res.length;
      })
  }
}
