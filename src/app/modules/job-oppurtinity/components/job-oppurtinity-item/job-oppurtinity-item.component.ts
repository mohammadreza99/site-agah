import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { JobItem } from '@shared/models';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { JobService } from '@core/http/job/job.service';

@Component({
  selector: 'ag-job-oppurtinity-item',
  templateUrl: './job-oppurtinity-item.component.html',
  styleUrls: ['./job-oppurtinity-item.component.scss'],
  animations: [
    trigger('toggle', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px' })),
      transition('false <=> true', animate('250ms ease-out')),
    ]),
  ],
})
export class JobOppurtinityItemComponent
  extends LanguageChecker
  implements OnInit {
  constructor(private jobService: JobService) {
    super();
  }

  @Input() job: JobItem;
  @Output() toggleEmitter = new EventEmitter();

  expanded = false;

  ngOnInit() {}

  onToggle() {
    this.toggleEmitter.next(this);
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  close() {
    this.expanded = false;
  }
}
