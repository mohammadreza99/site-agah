import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-product-features',
  templateUrl: './product-features.component.html',
  styleUrls: ['./product-features.component.scss'],
})
export class ProductFeaturesComponent implements OnInit {
  constructor() {}
  @Input() features: any[];
  @Input() description: string;
  ngOnInit(): void {}
}
