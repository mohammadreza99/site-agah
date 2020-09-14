import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { LightboxModule } from 'ngx-lightbox';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';

// if SSR issue not fix, use this package instead.
// import { NgxMasonryModule } from 'ngx-masonry';

import { SharedModule } from '@shared/shared.module';
import { COMPONENTS } from '.';
import { NewsRoutingModule } from './news-routing.module';
import { GalleryPage } from './pages/gallery/gallery.page';

@NgModule({
  declarations: [...COMPONENTS, GalleryPage],
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
