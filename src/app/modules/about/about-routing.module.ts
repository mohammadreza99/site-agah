import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPage } from './pages/about/about.page';
import { EmployeesPage } from './pages/employees/employees.page';
import { HistoryPage } from './pages/history/history.page';
import { ContactUsPage } from './pages/contact-us/contact-us.page';
import { CounselorsPage } from './pages/counselors/counselors.page';
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
        path: 'counselors',
        component: CounselorsPage,
        data: { breadcrumb: 'agah.counselors' },
      },
      {
        path: 'employees',
        component: EmployeesPage,
        data: { breadcrumb: 'agah.employees' },
      },
      {
        path: 'directors',
        component: DirectorsPage,
        data: { breadcrumb: 'agah.boardOfDirectors' },
      },
      {
        path: 'history',
        component: HistoryPage,
        data: { breadcrumb: 'agah.history' },
      },
      {
        path: 'stockholders',
        component: StockholdersPage,
        data: { breadcrumb: 'agah.stockholders' },
      },
      {
        path: 'contact-us',
        component: ContactUsPage,
        data: { breadcrumb: 'agah.contactUs' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
