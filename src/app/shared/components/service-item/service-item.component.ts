import { Component, OnInit, Input } from '@angular/core';
import { Service } from '@shared/models/service.model';

@Component({
  selector: 'ag-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss'],
})
export class ServiceItemComponent implements OnInit {
  constructor() {}

  @Input() service: Service;

  ngOnInit(): void {}
}
