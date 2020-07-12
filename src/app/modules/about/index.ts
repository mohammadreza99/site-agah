import { Type } from '@angular/core';
import { AboutPage } from '@modules/about/pages/about/about.page';
import { HistoriesComponent } from '@modules/about/components/histories/histories.component';
import { HistoryItemComponent } from '@modules/about/components/history-item/history-item.component';
import { EmployeesPage } from '@modules/about/pages/employees/employees.page';
import { BoardPage } from './pages/board/board.page';
import { HistoryPage } from './pages/history/history.page';
import { StockholdersPage } from './pages/stockholders/stockholders.page';
import { ContactUsPage } from './pages/contact-us/contact-us.page';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const COMPONENTS: Type<any>[] = [
  HistoriesComponent,
  HistoryItemComponent,
  AboutPage,
  EmployeesPage,
  BoardPage,
  HistoryPage,
  StockholdersPage,
  ContactUsPage,
  ContactUsComponent,
];
