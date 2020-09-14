import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StockholderService } from '@core/http/stockholder/stockholder.service';
import { Stockholder } from '@shared/models/stockholder.model';
import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { CounselorService } from '@app/core/http/counselor/counselor.service';
import { Counselor } from '@app/shared/models/counselor.model';

@Component({
  selector: 'ag-counselors-page',
  templateUrl: './counselors.page.html',
  styleUrls: ['./counselors.page.scss'],
})
export class CounselorsPage extends LanguageChecker implements OnInit {
  constructor(private counselorService: CounselorService) {
    super();
  }

  counselors$: Observable<Counselor[]>;

  ngOnInit(): void {
    this.counselors$ = this.counselorService.get();
  }
}
