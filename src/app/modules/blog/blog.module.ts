import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { COMPONENTS } from '.';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, BlogRoutingModule,SharedModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BlogModule {}
