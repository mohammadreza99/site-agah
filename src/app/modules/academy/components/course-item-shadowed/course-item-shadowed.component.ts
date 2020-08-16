import { Component, OnInit, Input } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-course-item-shadowed',
  templateUrl: './course-item-shadowed.component.html',
  styleUrls: ['./course-item-shadowed.component.scss'],
})
export class CourseItemShadowedComponent extends LanguageChecker
  implements OnInit {
  @Input() course: any;
  @Input() hoverable = true;
  ngOnInit(): void {}
}
