import { Component, OnInit, Input } from '@angular/core';

import { Product } from '@shared/models/product.model';

@Component({
  selector: 'ag-other-products',
  templateUrl: './other-products.component.html',
  styleUrls: ['./other-products.component.scss'],
})
export class OtherProductsComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() products: Product[] = [];

  ngOnInit(): void {}
}
