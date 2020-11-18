import { Component, OnInit, Input } from '@angular/core';
import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { Product } from '@shared/models';

@Component({
  selector: 'ag-product-details-header',
  templateUrl: './product-details-header.component.html',
  styleUrls: ['./product-details-header.component.scss'],
})
export class ProductDetailsHeaderComponent extends LanguageChecker
  implements OnInit {
  @Input() product: Product;

  ngOnInit(): void {}
}
