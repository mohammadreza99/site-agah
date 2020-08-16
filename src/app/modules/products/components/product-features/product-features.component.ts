import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@shared/models/product.model';

@Component({
  selector: 'ag-product-features',
  templateUrl: './product-features.component.html',
  styleUrls: ['./product-features.component.scss'],
})
export class ProductFeaturesComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() product: Product;

  ngOnInit(): void {}
}
