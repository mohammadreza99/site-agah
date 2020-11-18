import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AcademyService } from '@app/core/http/academy/academy.service';
import { Course } from '@app/shared/models';
import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-course-content',
  templateUrl: './course-content.page.html',
  styleUrls: ['./course-content.page.scss'],
})
export class CourseContentPage extends LanguageChecker implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private academyService: AcademyService
  ) {
    super();
  }

  course$: Observable<Course>;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('courseId');
    this.course$ = this.academyService.getCourseById(id);
  }
}
