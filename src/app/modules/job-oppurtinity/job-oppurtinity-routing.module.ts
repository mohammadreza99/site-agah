import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobOppurtinitiesPage } from './pages/job-oppurtinities/job-oppurtinities.page';
import { JobRequestPage } from './pages/job-request/job-request.page';

const routes: Routes = [
  {
    path: '',
    component: JobOppurtinitiesPage,
  },
  {
    path: 'job-request/:jobId',
    component: JobRequestPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobOppurtinityRoutingModule {}
