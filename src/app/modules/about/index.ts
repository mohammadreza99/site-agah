import { Type } from '@angular/core';
import { AboutPage } from '@modules/about/pages/about/about.page';
import { HistoriesComponent } from '@modules/about/components/histories/histories.component';
import { HistoryItemComponent } from '@modules/about/components/history-item/history-item.component';
import { EmployeesPage } from '@modules/about/pages/employees/employees.page';
import { HistoryPage } from '@modules/about/pages/history/history.page';
import { ContactUsPage } from '@modules/about/pages/contact-us/contact-us.page';
import { ContactUsComponent } from '@modules/about/components/contact-us/contact-us.component';
import { CounselorsPage } from './pages/counselors/counselors.page';
import { DirectorsPage } from './pages/directors/directors.page';
import { StockholdersPage } from '@modules/about/pages/stockholders/stockholders.page';

export const COMPONENTS: Type<any>[] = [
  HistoriesComponent,
  HistoryItemComponent,
  AboutPage,
  EmployeesPage,
  DirectorsPage,
  HistoryPage,
  StockholdersPage,
  ContactUsPage,
  ContactUsComponent,
  CounselorsPage,
];
