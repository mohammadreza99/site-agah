import { Component, Input, OnInit } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { Product } from '@shared/models';

@Component({
  selector: 'ag-other-product-item',
  templateUrl: './other-product-item.component.html',
  styleUrls: ['./other-product-item.component.scss'],
})
export class OtherProductItemComponent
  extends LanguageChecker
  implements OnInit {
  @Input() product: Product;

  ngOnInit(): void {}
}
