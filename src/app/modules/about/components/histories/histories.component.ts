import { Component, Input, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment-jalaali';

import { CarouselComponent } from '@shared/components/carousel/carousel.component';
import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { History } from '@shared/models/history.model';

@Component({
  selector: 'ag-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.scss'],
})
export class HistoriesComponent extends LanguageChecker implements OnInit {
  @Input() title: string;
  @Input() histories: History[] = [];
  @ViewChild(CarouselComponent) carouselCmp: CarouselComponent;

  activeSlide = 0;

  ngOnInit(): void {}

  onBulletClick(index) {
    this.activeSlide = index;
    this.carouselCmp.slideTo(index);
  }

  getTime(date) {
    if (this.fa) {
      return moment(date, 'YYYY-MM-DD').jYear();
    } else {
      return moment(date, 'YYYY-MM-DD').year();
    }
  }
}
