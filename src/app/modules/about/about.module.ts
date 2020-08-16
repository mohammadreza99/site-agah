import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AboutRoutingModule } from '@modules/about/about-routing.module';
import { SharedModule } from '@shared/shared.module';
import { COMPONENTS } from '.';

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [AboutRoutingModule, SharedModule, LeafletModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutModule {}
