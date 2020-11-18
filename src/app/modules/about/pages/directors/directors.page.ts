import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { Director } from '@shared/models';
import { AgahService } from '@core/http';

@Component({
  selector: 'ag-directors-page',
  templateUrl: './directors.page.html',
  styleUrls: ['./directors.page.scss'],
})
export class DirectorsPage extends LanguageChecker implements OnInit {
  constructor(private agahService: AgahService) {
    super();
  }

  directors$: Observable<Director[]>;

  ngOnInit(): void {
    this.directors$ = this.agahService.getDirectors();
  }
}
