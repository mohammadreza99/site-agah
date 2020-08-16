import { Component, OnInit } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-courses-intro',
  templateUrl: './courses-intro.component.html',
  styleUrls: ['./courses-intro.component.scss'],
})
export class CoursesIntroComponent extends LanguageChecker implements OnInit {
  ngOnInit(): void {}
}
