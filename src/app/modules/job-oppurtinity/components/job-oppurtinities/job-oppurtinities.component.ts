import {
  Component,
  OnInit,
  AfterContentInit,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { JobOppurtinityItemComponent } from '../job-oppurtinity-item/job-oppurtinity-item.component';

@Component({
  selector: 'ag-job-oppurtinities',
  templateUrl: './job-oppurtinities.component.html',
  styleUrls: ['./job-oppurtinities.component.scss'],
})
export class JobOppurtinitiesComponent implements OnInit, AfterContentInit {
  constructor() {}

  @ContentChildren(JobOppurtinityItemComponent) oppurtinityItemCmps: QueryList<
    JobOppurtinityItemComponent
  >;

  ngOnInit(): void {}

  ngAfterContentInit() {
    this.oppurtinityItemCmps.map((oppurtinityItemCmp, i) => {
      oppurtinityItemCmp.setActive.subscribe(() => this.setActive(i));
    });
  }

  setActive(index) {
    this.oppurtinityItemCmps.map((oppurtinityItemCmp, i) => {
      index !== i || oppurtinityItemCmp.active
        ? (oppurtinityItemCmp.active = false)
        : (oppurtinityItemCmp.active = true);
    });
  }
}
