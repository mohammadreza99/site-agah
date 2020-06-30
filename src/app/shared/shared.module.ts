import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPopperModule, Triggers } from 'ngx-popper';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { COMPONENTS } from '.';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPopperModule.forRoot({
      trigger: Triggers.CLICK,
    }),
    NgxUsefulSwiperModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
