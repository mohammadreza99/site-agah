import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPage } from './pages/products/products.page';
import { ProductDetailsPage } from './pages/product-details/product-details.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductsPage,
        // data: { breadcrumb: 'BREADCRUMBS.PRODUCTS' },
      },
      {
        path: 'details/:id',
        component: ProductDetailsPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
