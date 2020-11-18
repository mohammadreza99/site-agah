import { Component, Input, OnInit } from '@angular/core';
import { Course } from '@app/shared/models';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-course-timeline',
  templateUrl: './course-timeline.component.html',
  styleUrls: ['./course-timeline.component.scss'],
})
export class CourseTimelineComponent extends LanguageChecker implements OnInit {
  @Input() course: Course;

  ngOnInit(): void {}
}
