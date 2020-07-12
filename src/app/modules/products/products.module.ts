import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';
import { RouterModule } from '@angular/router';

import { ProductsRoutingModule } from '@modules/products/products-routing.module';
import { SharedModule } from '@shared/shared.module';
import { COMPONENTS } from '.';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    CountdownModule,
    RouterModule,
    TranslateModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ProductsModule {}
