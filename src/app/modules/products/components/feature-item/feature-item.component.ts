import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.scss'],
})
export class FeatureItemComponent implements OnInit {
  constructor() {}
  @Input() text: string;
  @Input() image: string;
  
  ngOnInit(): void {}
}
