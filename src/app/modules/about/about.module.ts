import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AboutRoutingModule } from '@modules/about/about-routing.module';
import { SharedModule } from '@shared/shared.module';
import { COMPONENTS } from '.';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AboutRoutingModule,
    SharedModule,
    TranslateModule,
    LeafletModule,
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutModule {}
