import { Component, OnInit } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-courses-category-page',
  templateUrl: './courses-category.page.html',
  styleUrls: ['./courses-category.page.scss'],
})
export class CoursesCategoryPage extends LanguageChecker implements OnInit {
  course = {
    title: 'Test Course',
    image: 'assets/images/company.png',
    content: 'Description Course',
    category: 'Business',
    icon: 'assets/images/outline.png',
  };

  ngOnInit(): void {}
}
