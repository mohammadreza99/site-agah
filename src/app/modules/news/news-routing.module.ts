import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsPage } from './pages/news/news.page';
import { NewsDetailsPage } from './pages/news-details/news-details.page';
import { GalleryDetailsPage } from './pages/gallery-details/gallery-details.page';
import { GalleryPage } from './pages/gallery/gallery.page';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: NewsPage,
        data: { breadcrumb: 'modules.news.news&Events' },
      },
      {
        path: 'details/:newsId',
        component: NewsDetailsPage,
      },
      {
        path: 'gallery',
        component: GalleryPage,
        data: { breadcrumb: 'buttons.gallery' },
      },
      {
        path: 'gallery/:id',
        component: GalleryDetailsPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
