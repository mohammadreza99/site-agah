import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ag-courses-category-page',
  templateUrl: './courses-category.page.html',
  styleUrls: ['./courses-category.page.scss'],
})
export class CoursesCategoryPage implements OnInit {
  constructor() {}

  course = {
    title: 'Test Course',
    image: 'assets/images/company.png',
    content: 'Description Course',
    category: 'Business',
    icon: 'assets/images/outline.png',
  };

  ngOnInit(): void {}
}
