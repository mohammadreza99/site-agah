import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { Counselor } from '@shared/models';
import { AgahService } from '@core/http';

@Component({
  selector: 'ag-counselors-page',
  templateUrl: './counselors.page.html',
  styleUrls: ['./counselors.page.scss'],
})
export class CounselorsPage extends LanguageChecker implements OnInit {
  constructor(private agahService: AgahService) {
    super();
  }

  counselors$: Observable<Counselor[]>;

  ngOnInit(): void {
    this.counselors$ = this.agahService.getCounselors();
  }
}
