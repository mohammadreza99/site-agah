import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss'],
})
export class ServiceItemComponent implements OnInit {
  constructor() {}
  @Input() title: string;
  @Input() icon: string;
  @Input() description: string;

  ngOnInit(): void {}
}
