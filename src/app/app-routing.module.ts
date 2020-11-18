import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LangGuard } from './core/guard/lang.guard';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'agah.home' },
    canActivate: [LangGuard],
    loadChildren: () =>
      import('@modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'products',
    canActivate: [LangGuard],
    data: { breadcrumb: 'agah.products' },
    loadChildren: () =>
      import('@modules/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'academy',
    canActivate: [LangGuard],
    data: { breadcrumb: 'agah.academy' },
    loadChildren: () =>
      import('@modules/academy/academy.module').then((m) => m.AcademyModule),
  },
  {
    path: 'posts',
    canActivate: [LangGuard],
    data: { breadcrumb: 'modules.posts.blogPosts' },
    loadChildren: () =>
      import('@modules/post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'news',
    canActivate: [LangGuard],
    data: { breadcrumb: 'modules.news.news&Events' },
    loadChildren: () =>
      import('@modules/news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'job-oppurtinities',
    canActivate: [LangGuard],
    data: { breadcrumb: 'modules.jobs.oppurtinity' },
    loadChildren: () =>
      import('@modules/job-oppurtinity/job-oppurtinity.module').then(
        (m) => m.JobOppurtinityModule
      ),
  },
  {
    path: 'about',
    canActivate: [LangGuard],
    data: { breadcrumb: 'agah.about' },
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
