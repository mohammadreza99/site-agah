import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-process-item',
  templateUrl: './process-item.component.html',
  styleUrls: ['./process-item.component.scss'],
})
export class ProcessItemComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() image: string;
  @Input() description: string;
  @Input() direction: 'ltr' | 'rtl' = 'rtl';

  get isRtl() {
    return this.direction === 'rtl';
  }
  
  ngOnInit(): void {}
}
