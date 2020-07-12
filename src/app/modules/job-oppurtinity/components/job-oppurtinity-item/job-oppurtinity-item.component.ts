import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'ag-job-oppurtinity-item',
  templateUrl: './job-oppurtinity-item.component.html',
  styleUrls: ['./job-oppurtinity-item.component.scss'],
})
export class JobOppurtinityItemComponent implements OnInit {
  constructor() {}

  @Input() active = false;
  @Output() setActive = new EventEmitter();

  ngOnInit() {}
}
