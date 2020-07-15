import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-course-details-header',
  templateUrl: './course-details-header.component.html',
  styleUrls: ['./course-details-header.component.scss'],
})
export class CourseDetailsHeaderComponent implements OnInit {
  constructor() {}

  @Input() showFeatures = true;

  ngOnInit(): void {}
}
