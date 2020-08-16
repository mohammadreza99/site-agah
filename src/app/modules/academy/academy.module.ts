import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxScrollspyModule } from '@uniprank/ngx-scrollspy';

import { AcademyRoutingModule } from '@modules/academy/academy-routing.module';
import { SharedModule } from '@shared/shared.module';
import { COMPONENTS } from '.';

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [AcademyRoutingModule, SharedModule, NgxScrollspyModule.forRoot()],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AcademyModule {}
