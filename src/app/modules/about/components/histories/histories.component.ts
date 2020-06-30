import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';

@Component({
  selector: 'ag-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.scss'],
})
export class HistoriesComponent implements OnInit {
  constructor() {}

  @Input() histories: any[] = [];
  @ViewChild(CarouselComponent) carouselCmp: CarouselComponent;

  activeSlide: number = 0;

  ngOnInit(): void {}

  onBulletClick(index) {
    this.activeSlide = index;
    this.carouselCmp.slideTo(index);
  }
}
