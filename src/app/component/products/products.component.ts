import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Products } from 'src/app/interface';
import { CartserviceService } from 'src/app/service/cartservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 productList! : Products[];
  constructor(private api : ServiceService, private cartservice : CartserviceService  ) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList=res;
    })
  }
  addItemtoCart(product : Products){
this.cartservice.addItemtoCart(product);
  }

}
