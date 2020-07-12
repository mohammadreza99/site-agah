import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@shared/models/product.model';

@Component({
  selector: 'ag-other-product-item',
  templateUrl: './other-product-item.component.html',
  styleUrls: ['./other-product-item.component.scss'],
})
export class OtherProductItemComponent implements OnInit {
  constructor() {}

  @Input() product: Product;

  ngOnInit(): void {}
}
