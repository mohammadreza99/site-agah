import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '@shared/models';
import { ActivatedRoute } from '@angular/router';
import { AcademyService } from '@app/core/http/academy/academy.service';

@Component({
  selector: 'ag-courses-page',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private academyService: AcademyService
  ) {}

  courses$: Observable<Course[]>;

  ngOnInit(): void {
    const category = this.route.snapshot.paramMap.get('categoryId');
    this.courses$ = this.academyService.getCoursesByCategory(category);
  }
}
