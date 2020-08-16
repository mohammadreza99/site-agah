import { Component, OnInit } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-course-content',
  templateUrl: './course-content.page.html',
  styleUrls: ['./course-content.page.scss'],
})
export class CourseContentPage extends LanguageChecker implements OnInit {
  ngOnInit(): void {}
}
