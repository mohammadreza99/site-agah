import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: '' },
    loadChildren: () =>
      import('@modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'products',
    data: { breadcrumb: 'BREADCRUMBS.PRODUCTS' },
    loadChildren: () =>
      import('@modules/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'academy',
    data: { breadcrumb: 'BREADCRUMBS.ACADEMY' },
    loadChildren: () =>
      import('@modules/academy/academy.module').then((m) => m.AcademyModule),
  },
  {
    path: 'posts',
    data: { breadcrumb: 'BREADCRUMBS.POSTS' },
    loadChildren: () =>
      import('@modules/post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'news',
    data: { breadcrumb: 'BREADCRUMBS.NEWS' },
    loadChildren: () =>
      import('@modules/news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'job-oppurtinities',
    data: { breadcrumb: 'BREADCRUMBS.JOB_OPPURTINITIES' },
    loadChildren: () =>
      import('@modules/job-oppurtinity/job-oppurtinity.module').then(
        (m) => m.JobOppurtinityModule
      ),
  },
  {
    path: 'about',
    data: { breadcrumb: 'BREADCRUMBS.ABOUT' },
    loadChildren: () =>
      import('@modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
