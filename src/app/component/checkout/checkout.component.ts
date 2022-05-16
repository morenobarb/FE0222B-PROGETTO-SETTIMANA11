import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface';
import { CartserviceService } from 'src/app/service/cartservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
public product : Products[] =[]
  constructor(private cartService : CartserviceService ) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.product = res;
    })
  }

}
