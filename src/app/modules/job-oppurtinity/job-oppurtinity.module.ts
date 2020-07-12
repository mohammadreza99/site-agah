import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared/shared.module';
import { COMPONENTS } from '.';
import { JobOppurtinityRoutingModule } from './job-oppurtinity-routing.module';
import { JobOppurtinitiesComponent } from './components/job-oppurtinities/job-oppurtinities.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [...COMPONENTS, JobOppurtinitiesComponent],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    JobOppurtinityRoutingModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class JobOppurtinityModule {}
