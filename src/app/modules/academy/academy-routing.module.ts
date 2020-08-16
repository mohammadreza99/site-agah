import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademyPage } from './pages/academy/academy.page';
import { WorkshopPage } from './pages/workshop/workshop.page';
import { CoursesCategoryPage } from './pages/courses-category/courses-category.page';
import { CoursesPage } from './pages/courses/courses.page';
import { CourseDetailsPage } from './pages/course-details/course-details.page';
import { CourseContentPage } from './pages/course-content/course-content.page';

const routes: Routes = [
  {
    path: '',
    component: AcademyPage,
    data: { breadcrumb: 'BREADCRUMBS.ACADEMY' },
  },
  {
    path: 'workshop',
    component: WorkshopPage,
    data: { breadcrumb: 'BREADCRUMBS.WORKSHOP' },
  },
  {
    path: 'courses-category',
    component: CoursesCategoryPage,
  },
  {
    path: 'courses',
    children: [
      {
        path: ':categoryId',
        component: CoursesPage,
      },
      {
        path: 'details/:courseId',
        component: CourseDetailsPage,
      },
      {
        path: 'content/:courseId',
        component: CourseContentPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademyRoutingModule {}
