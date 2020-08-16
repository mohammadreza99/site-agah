import {
  Component,
  ContentChildren,
  QueryList,
  Input,
  AfterViewInit,
} from '@angular/core';

import { JobOppurtinityItemComponent } from '@modules/job-oppurtinity/components/job-oppurtinity-item/job-oppurtinity-item.component';

@Component({
  selector: 'ag-job-oppurtinities',
  templateUrl: './job-oppurtinities.component.html',
  styleUrls: ['./job-oppurtinities.component.scss'],
})
export class JobOppurtinitiesComponent implements AfterViewInit {
  constructor() {}

  @ContentChildren(JobOppurtinityItemComponent) jobItemCmps: QueryList<
    JobOppurtinityItemComponent
  >;
  @Input() mode: 'single' | 'multiple' = 'single';

  openChild: JobOppurtinityItemComponent = null;

  ngAfterViewInit() {
    this.jobItemCmps.forEach((jobCmp) => {
      jobCmp.toggleEmitter.subscribe((item) => {
        this.expand(item);
      });
    });
  }

  expand(item) {
    if (item === this.openChild && item.expanded) {
      return item.close();
    }
    item.toggle();
    this.openChild = item;
    if (this.mode === 'multiple') {
      return;
    }
    this.jobItemCmps
      .filter((jobCmp) => jobCmp !== this.openChild)
      .map((jobCmp) => jobCmp.close());
  }
}
