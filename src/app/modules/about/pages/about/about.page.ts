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
    private employeeService: EmployeeService
  ) {}

  vision$: Observable<Vision>;
  histories$: Observable<History[]>;
  directors$: Observable<Director[]>;
  employees$: Observable<Employee[]>;
  stockholders$: Observable<Stockholder[]>;
  newsLetters$: Observable<NewsLetter[]>;

  ngOnInit(): void {
    this.vision$ = this.visionService.getVisionById(1);
    this.histories$ = this.historyService.getHistorys();
    this.directors$ = this.directorService.getDirectors();
    this.employees$ = this.employeeService.getEmployees();
    this.stockholders$ = this.stockholderService.getStockholders();
  }
}
