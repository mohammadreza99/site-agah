import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AgahService, MultimediaService } from '@core/http';
import {
  Vision,
  Director,
  Employee,
  Stockholder,
  Department,
  NewsLetter,
  News,
  Counselor,
  HistoryItem,
} from '@shared/models';
import { LanguageChecker } from '@app/shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-about-page',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage extends LanguageChecker implements OnInit {
  constructor(
    private agahService: AgahService,
    private multimediaService: MultimediaService
  ) {
    super();
  }

  vision$: Observable<Vision>;
  histories$: Observable<HistoryItem[]>;
  directors$: Observable<Director[]>;
  employees$: Observable<Employee[]>;
  stockholders$: Observable<Stockholder[]>;
  departments$: Observable<Department[]>;
  newsLetters$: Observable<NewsLetter[]>;
  news$: Observable<News[]>;
  counselors$: Observable<Counselor[]>;

  ngOnInit(): void {
    this.vision$ = this.agahService.getVision();
    this.histories$ = this.agahService.getHistories();
    this.directors$ = this.agahService.getDirectors();
    this.employees$ = this.agahService.getEmployees();
    this.stockholders$ = this.agahService.getStockholders();
    this.counselors$ = this.agahService.getCounselors();
    this.departments$ = this.agahService.getDepartments();
    this.news$ = this.multimediaService.getNews();
  }
}
