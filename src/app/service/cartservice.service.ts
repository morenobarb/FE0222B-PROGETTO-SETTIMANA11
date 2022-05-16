import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class CartserviceService {
  public cartProductsList: Products[] = [];
  public productList = new BehaviorSubject<Products[]>([]);

  constructor() {}
  getProducts() {
    return this.productList.asObservable();
  }
addItemtoCart(product : Products){
    this.cartProductsList.push(product);
    this.productList.next(this.cartProductsList);

  }

}
