import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Products } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  getProduct() {
    return this.http.get<Products[]>('http://localhost:4201/products');
  }
  getItem(id:number) {
    return this.http.get<Products>('http://localhost:4201/products' + '/'+id);
  }
}
