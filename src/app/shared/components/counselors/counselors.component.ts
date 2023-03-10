import { Component, OnInit, Input } from '@angular/core';
import { Counselor } from '@shared/models';

@Component({
  selector: 'ag-counselors',
  templateUrl: './counselors.component.html',
  styleUrls: ['./counselors.component.scss'],
})
export class CounselorsComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() counselors: Counselor[] = [];
  @Input() buttonLabel: string;
  @Input() buttonRouterLink: string;

  ngOnInit(): void {}
}
