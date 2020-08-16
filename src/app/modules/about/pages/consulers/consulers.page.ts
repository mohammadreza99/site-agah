import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StockholderService } from '@core/http/stockholder/stockholder.service';
import { Stockholder } from '@shared/models/stockholder.model';
import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-consulers-page',
  templateUrl: './consulers.page.html',
  styleUrls: ['./consulers.page.scss'],
})
export class ConsulersPage extends LanguageChecker implements OnInit {
  constructor(private stockholderService: StockholderService) {
    super();
  }
  consulers = [
    {
      firstName: 'George',
      lastName: 'Verghese',
      image: 'assets/images/moshaver.jpg',
      company_position: {},
    },
  ];
  stockholders$: Observable<Stockholder[]>;

  ngOnInit(): void {
    this.stockholders$ = this.stockholderService.get();
  }
}
