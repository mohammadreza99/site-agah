import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from '@modules/home/pages/home/home.page';
import { GalleryPage } from './pages/gallery/gallery.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'gallery',
    component: GalleryPage,
    data: { breadcrumb: 'BREADCRUMBS.GALLERY' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
