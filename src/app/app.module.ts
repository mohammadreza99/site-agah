import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { HomeModule } from '@modules/home/home.module';
import { ProductsModule } from '@modules/products/products.module';
import { AboutModule } from '@modules/about/about.module';
import { AcademyModule } from '@modules/academy/academy.module';
import { JobOppurtinityModule } from '@modules/job-oppurtinity/job-oppurtinity.module';
import { PostModule } from '@modules/post/post.module';
import { NewsModule } from './modules/news/news.module';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ReactiveFormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
    SharedModule,
    CoreModule,
    HomeModule,
    ProductsModule,
    PostModule,
    AboutModule,
    AcademyModule,
    JobOppurtinityModule,
    NewsModule,
    PostModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
