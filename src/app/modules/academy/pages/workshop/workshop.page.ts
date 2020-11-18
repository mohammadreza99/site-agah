import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcademyService } from '@app/core/http/academy/academy.service';
import { LanguageChecker } from '@app/shared/components/language-checker/language-checker.component';
import { Course, Workshop } from '@app/shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'ag-workshop',
  templateUrl: './workshop.page.html',
  styleUrls: ['./workshop.page.scss'],
})
export class WorkshopPage extends LanguageChecker implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private academyService: AcademyService
  ) {
    super();
  }
  workshop$: Observable<Workshop>;
  otherCourses$: Observable<Course[]>;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('courseId');
    this.workshop$ = this.academyService.getWorkshopById(id);
    this.otherCourses$ = this.academyService.getCourses();
  }
}
