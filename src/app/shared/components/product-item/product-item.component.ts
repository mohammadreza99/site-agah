import { Component, OnInit, Input } from '@angular/core';

import { Product } from '@shared/models/product.model';

@Component({
  selector: 'ag-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  constructor() {}

  @Input() product: Product;
  @Input() dir: 'ltr' | 'rtl' = 'rtl';

  get isRtl() {
    return this.dir === 'rtl';
  }

  get isLtr() {
    return this.dir === 'ltr';
  }

  ngOnInit(): void {}
}
