import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LightboxModule } from 'ngx-lightbox';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
// if SSR issue not fix, use this package instead.
// import { NgxMasonryModule } from 'ngx-masonry';

import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from '@modules/home/home-routing.module';
import { COMPONENTS } from '.';

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    HomeRoutingModule,
    SharedModule,
    LightboxModule,
    MasonryGalleryModule,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
