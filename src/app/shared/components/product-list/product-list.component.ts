import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@shared/models';

@Component({
  selector: 'ag-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor() {}

  @Input() products: Product[];

  ngOnInit(): void {}
}
