import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DirectorService } from '@core/http/director/director.service';
import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { Director } from '@shared/models/director.mode';

@Component({
  selector: 'ag-directors',
  templateUrl: './directors.page.html',
  styleUrls: ['./directors.page.scss'],
})
export class DirectorsPage extends LanguageChecker implements OnInit {
  constructor(private directorService: DirectorService) {
    super();
  }

  directors$: Observable<Director[]>;

  ngOnInit(): void {
    this.directors$ = this.directorService.get();
  }
}
