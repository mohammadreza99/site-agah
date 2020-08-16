import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { LanguageChecker } from '@app/shared/components/language-checker/language-checker.component';

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
