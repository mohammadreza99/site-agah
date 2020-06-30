import { Type } from '@angular/core';
import { EmployersComponent } from './components/employers/employers.component';
import { AboutPage } from './pages/about/about.page';
import { HistoriesComponent } from './components/histories/histories.component';
import { HistoryItemComponent } from './components/history-item/history-item.component';

export const COMPONENTS: Type<any>[] = [
  HistoriesComponent,
  EmployersComponent,
  AboutPage,
  HistoryItemComponent,
];
