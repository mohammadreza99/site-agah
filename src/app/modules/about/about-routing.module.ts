import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPage } from './pages/about/about.page';
import { EmployeesPage } from './pages/employees/employees.page';
import { HistoryPage } from './pages/history/history.page';
import { ContactUsPage } from './pages/contact-us/contact-us.page';
import { ConsulersPage } from './pages/consulers/consulers.page';
import { DirectorsPage } from './pages/directors/directors.page';
import { StockholdersPage } from './pages/stockholders/stockholders.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AboutPage,
      },
      {
        path: 'consulers',
        component: ConsulersPage,
        data: { breadcrumb: 'BREADCRUMBS.CONSULERS' },
      },
      {
        path: 'employees',
        component: EmployeesPage,
        data: { breadcrumb: 'BREADCRUMBS.EMPLOYEES' },
      },
      {
        path: 'directors',
        component: DirectorsPage,
        data: { breadcrumb: 'BREADCRUMBS.DIRECTORS' },
      },
      {
        path: 'history',
        component: HistoryPage,
        data: { breadcrumb: 'BREADCRUMBS.HISTORY' },
      },
      {
        path: 'stockholders',
        component: StockholdersPage,
        data: { breadcrumb: 'BREADCRUMBS.STOCKHOLDERS' },
      },
      {
        path: 'contact-us',
        component: ContactUsPage,
        data: { breadcrumb: 'BREADCRUMBS.CONTACT_US' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
