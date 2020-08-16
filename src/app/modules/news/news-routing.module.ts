import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsPage } from './pages/news/news.page';
import { NewsDetailsPage } from './pages/news-details/news-details.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: NewsPage,
        data: { breadcrumb: 'BREADCRUMBS.NEWS' },
      },
      {
        path: 'details/:newsId',
        component: NewsDetailsPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
