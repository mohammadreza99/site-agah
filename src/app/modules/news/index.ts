import { Type } from '@angular/core';
import { NewsPage } from '@modules/news/pages/news/news.page';
import { NewsDetailsHeaderComponent } from '@modules/news/components/news-details-header/news-details-header.component';
import { NewsDetailsPage } from '@modules/news/pages/news-details/news-details.page';

export const COMPONENTS: Type<any>[] = [
  NewsPage,
  NewsDetailsHeaderComponent,
  NewsDetailsPage,
];
