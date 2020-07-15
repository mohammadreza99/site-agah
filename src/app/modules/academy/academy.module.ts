import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxScrollspyModule } from '@uniprank/ngx-scrollspy';

import { AcademyRoutingModule } from '@modules/academy/academy-routing.module';
import { SharedModule } from '@shared/shared.module';
import { COMPONENTS } from '.';

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    AcademyRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxScrollspyModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AcademyModule {}
