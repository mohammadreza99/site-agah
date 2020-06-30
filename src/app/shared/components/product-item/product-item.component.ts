import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  constructor() {}
  // TODO: change all seperate @Inputs to "@Input() product:Product".
  @Input() dir: 'ltr' | 'rtl' = 'rtl';
  @Input() title: string;
  @Input() id: string = '22';
  @Input() description: string;
  @Input() imageUrl: string;
  @Input() websiteUrl: string;
  @Input() readMoreUrl: string;

  get isRtl() {
    return this.dir == 'rtl';
  }

  get isLtr() {
    return this.dir == 'ltr';
  }

  ngOnInit(): void {}
}
