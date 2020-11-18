import { Component, OnInit, Input } from '@angular/core';
import { LanguageChecker } from '../language-checker/language-checker.component';

@Component({
  selector: 'ag-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent extends LanguageChecker implements OnInit {
  constructor() {
    super();
  }

  @Input() course: any;

  ngOnInit(): void {}
}
