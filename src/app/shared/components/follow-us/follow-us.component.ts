import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-follow-us',
  templateUrl: './follow-us.component.html',
  styleUrls: ['./follow-us.component.scss'],
})
export class FollowUsComponent implements OnInit {
  constructor() {}

  @Input() dotsPosition: 'left' | 'right' = 'left';

  get dotsInRight() {
    return this.dotsPosition === 'right';
  }

  get dotsInLeft() {
    return this.dotsPosition === 'left';
  }
  ngOnInit(): void {}
}
