import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { VisionService } from '@core/http/vision/vision.service';
import { HistoryService } from '@core/http/history/history.service';
import { DirectorService } from '@core/http/director/director.service';
import { StockholderService } from '@core/http/stockholder/stockholder.service';
import { EmployeeService } from '@core/http/employee/employee.service';
import { Vision } from '@shared/models/vision.model';
import { History } from '@shared/models/history.model';
import { Director } from '@shared/models/director.mode';
import { Employee } from '@shared/models/employee.model';
import { Stockholder } from '@shared/models/stockholder.model';
import { NewsLetter } from '@shared/models/news-letter.model';
import { NewsLetterService } from '@core/http/news-letter/news-letter.service';
import { Department } from '@shared/models/department.model';
import { DepartmentService } from '@core/http/department/department.service';
import { News } from '@app/shared/models/news.model';
import { NewsService } from '@app/core/http/news/news.service';

@Component({
  selector: 'ag-about-page',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  constructor(
    private visionService: VisionService,
    private historyService: HistoryService,
    private directorService: DirectorService,
    private stockholderService: StockholderService,
    private departmentService: DepartmentService,
    private employeeService: EmployeeService,
    private newsService: NewsService
  ) {}

  vision$: Observable<Vision>;
  histories$: Observable<History[]>;
  directors$: Observable<Director[]>;
  employees$: Observable<Employee[]>;
  stockholders$: Observable<Stockholder[]>;
  departments$: Observable<Department[]>;
  newsLetters$: Observable<NewsLetter[]>;
  news$: Observable<News[]>;
  consulers = [
    {
      firstName: 'George',
      lastName: 'Verghese',
      image: 'assets/images/moshaver.jpg',
      company_position: {},
    },
  ];
  ngOnInit(): void {
    this.vision$ = this.visionService.get();
    this.histories$ = this.historyService.get();
    this.directors$ = this.directorService.get();
    this.employees$ = this.employeeService.get();
    this.stockholders$ = this.stockholderService.get();
    this.departments$ = this.departmentService.get();
    this.news$ = this.newsService.get();
  }
}
