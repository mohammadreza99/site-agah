import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { LightboxModule } from 'ngx-lightbox';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';

import { SharedModule } from '@shared/shared.module';
import { COMPONENTS } from '.';
import { NewsRoutingModule } from './news-routing.module';

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    NewsRoutingModule,
    SharedModule,
    LightboxModule,
    MasonryGalleryModule,
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsModule {}
