import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { CarouselComponent } from '@shared/components/carousel/carousel.component';
import { History } from '@shared/models/history.model';

@Component({
  selector: 'ag-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.scss'],
})
export class HistoriesComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() histories: History[] = [];
  @ViewChild(CarouselComponent) carouselCmp: CarouselComponent;

  activeSlide = 0;

  ngOnInit(): void {}

  onBulletClick(index) {
    this.activeSlide = index;
    this.carouselCmp.slideTo(index);
  }
}
