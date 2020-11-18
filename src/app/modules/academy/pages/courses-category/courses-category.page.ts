import { Component, OnInit } from '@angular/core';
import { AcademyService } from '@app/core/http/academy/academy.service';
import { Category, Course } from '@app/shared/models';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { Observable } from 'rxjs';

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

  constructor(private academyService: AcademyService) {
    super();
  }

  bestCourses$: Observable<Course[]>;
  coursesCategory: { category: Category; courses: Course[] }[] = [];

  ngOnInit(): void {
    this.bestCourses$ = this.academyService.getBestCourses();
    this.loadCoursesCategory();
  }

  async loadCoursesCategory() {
    const categories = await this.academyService.getCategories().toPromise();
    const courses = await this.academyService.getCourses().toPromise();
    for (const cat of categories) {
      const filteredCourses = courses.filter((c) => c.catagory_id == cat.id);
      this.coursesCategory.push({
        category: cat,
        courses: filteredCourses,
      });
    }
  }
}
