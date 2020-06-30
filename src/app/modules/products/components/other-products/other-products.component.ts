import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-other-products',
  templateUrl: './other-products.component.html',
  styleUrls: ['./other-products.component.scss'],
})
export class OtherProductsComponent implements OnInit {
  constructor() {}
  
  @Input() products: any[] = [];

  ngOnInit(): void {}
}
