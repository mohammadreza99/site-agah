import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';

import { COMPONENTS } from '.';

@NgModule({
  declarations: [...COMPONENTS, ],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgxUsefulSwiperModule,
    TranslateModule,
    DpDatePickerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
