import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './modules/home/pages/home/home.page';
import { ProductsPage } from './modules/products/pages/products/products.page';
import { AboutPage } from './modules/about/pages/about/about.page';
import { ProductDetailsPage } from './modules/products/pages/product-details/product-details.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsPage,
      },
      {
        path: ':id',
        component: ProductDetailsPage,
      },
    ],
  },
  {
    path: 'about',
    component: AboutPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
