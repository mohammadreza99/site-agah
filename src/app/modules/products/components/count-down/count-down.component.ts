import { Component, OnInit, Input } from '@angular/core';
import { CountdownConfig } from 'ngx-countdown';
import * as moment from 'moment';

@Component({
  selector: 'ag-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() end: Date;

  currentRemainigTime: number;
  allRemainingTime: number;
  config: CountdownConfig = {
    notify: 0,
    format: 'dd:HH:mm:ss',
    prettyText: (text: string) => {
      return `
      <div class="d-flex align-items-start wrapper justify-content-end">
      <span class="time d-flex flex-column mx-3">
      ${text[0]}${+text[1] - 1}
      <span>Day</span>
      </span>
      <span class="semi">${text[2]}</span>
      <span class="time d-flex flex-column mx-3">
      ${text[3]}${text[4]}
      <span>Hour</span>
      </span>
      <span class="semi">
      ${text[5]}
      </span>
      <span class="time d-flex flex-column mx-3">
      ${text[6]}${text[7]}
      <span>Min</span>
      </span>
      <span class="semi">${text[8]}</span>
      <span class="time d-flex flex-column mx-3">
      ${text[9]}${text[10]}
      <span>Sec</span>
        </span>
      </div>
      `;
    },
  };

  ngOnInit(): void {
    this.allRemainingTime = this.getDateDiffInSecond(this.end);
    this.config.leftTime = this.allRemainingTime;
  }

  onCountChange(event) {
    this.currentRemainigTime = event.left / 1000;
  }

  getProgressWidth(): number {
    return (this.currentRemainigTime * 100) / this.allRemainingTime;
  }

  getDateDiffInSecond(date: Date): number {
    const diff = moment(date).diff(moment(new Date()), 'seconds');
    if (diff > 0) {
      return diff;
    } else {
      throw Error('the end time you enter is EXPIRED!');
    }
  }
}
