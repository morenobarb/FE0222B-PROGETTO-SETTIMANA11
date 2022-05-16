import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Products } from 'src/app/interface';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  idproduct!: Products;
  constructor(
    private router: ActivatedRoute,
    private productsrv: ServiceService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.productsrv.getItem(id).subscribe((item) => {
        this.idproduct = item;
      });
    });
  }
}
