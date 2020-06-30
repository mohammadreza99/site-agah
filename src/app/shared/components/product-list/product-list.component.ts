import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor() {}
  
  @Input() products: any[];

  ngOnInit(): void {}
}
