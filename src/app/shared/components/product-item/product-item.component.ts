import { Component, Input, OnInit } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { Product } from '@shared/models/product.model';


@Component({
  selector: 'ag-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent extends LanguageChecker implements OnInit {
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
