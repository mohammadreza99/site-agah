import { Component, OnInit, Input } from '@angular/core';
import { Process } from '@shared/models/product.model';

@Component({
  selector: 'ag-process-item',
  templateUrl: './process-item.component.html',
  styleUrls: ['./process-item.component.scss'],
})
export class ProcessItemComponent implements OnInit {
  constructor() {}

  @Input() process: Process;
  @Input() direction: 'ltr' | 'rtl' = 'rtl';

  get isRtl() {
    return this.direction === 'rtl';
  }

  ngOnInit(): void {}
}
