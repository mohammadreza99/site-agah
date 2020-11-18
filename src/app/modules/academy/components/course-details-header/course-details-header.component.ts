import { Component, OnInit, Input } from '@angular/core';
import { Course, Workshop } from '@app/shared/models';

@Component({
  selector: 'ag-course-details-header',
  templateUrl: './course-details-header.component.html',
  styleUrls: ['./course-details-header.component.scss'],
})
export class CourseDetailsHeaderComponent implements OnInit {
  constructor() {}

  @Input() course: Course | Workshop;
  @Input() showFeatures = true;

  ngOnInit(): void {}
}
