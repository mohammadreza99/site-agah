import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-product-details-header',
  templateUrl: './product-details-header.component.html',
  styleUrls: ['./product-details-header.component.scss'],
})
export class ProductDetailsHeaderComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() siteUrl: string;

  ngOnInit(): void {}
}
