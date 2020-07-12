import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'ngx-useful-swiper';

@Component({
  selector: 'ag-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  constructor() {}

  @Input() showBullets = true;
  @Input() showArrows = true;
  @Input() allowTouchMove = true;
  @Input() slideSpace = 30;
  @Output() onSlideNext = new EventEmitter();
  @Output() onSlidePrev = new EventEmitter();
  @ViewChild('carousel', { static: false }) carousel: SwiperComponent;

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: this.slideSpace,
  };

  ngAfterViewInit(): void {
    this.carousel.swiper.allowTouchMove = this.allowTouchMove;
  }

  slideNext() {
    this.carousel.swiper.slideNext();
    this.onSlideNext.emit(this.carousel.swiper.activeIndex);
  }

  slidePrev() {
    this.carousel.swiper.slidePrev();
    this.onSlidePrev.emit(this.carousel.swiper.activeIndex);
  }

  slideTo(index: number) {
    this.carousel.swiper.slideTo(index);
  }

  _onSlideNext() {
    this.onSlideNext.emit(this.carousel.swiper.activeIndex);
  }

  _onSlidePrev() {
    this.onSlidePrev.emit(this.carousel.swiper.activeIndex);
  }
}
