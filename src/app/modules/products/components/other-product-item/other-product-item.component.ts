import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-other-product-item',
  templateUrl: './other-product-item.component.html',
  styleUrls: ['./other-product-item.component.scss'],
})
export class OtherProductItemComponent implements OnInit {
  constructor() {}
  
  @Input() id: string;
  @Input() title: string;
  @Input() image: string;

  ngOnInit(): void {}
}
