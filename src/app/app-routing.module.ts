import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from '@modules/home/pages/home/home.page';
import { ProductsPage } from '@modules/products/pages/products/products.page';
import { AboutPage } from '@modules/about/pages/about/about.page';
import { ProductDetailsPage } from '@modules/products/pages/product-details/product-details.page';
import { AcademyPage } from '@modules/academy/pages/academy/academy.page';
import { EmployeesPage } from '@modules/about/pages/employees/employees.page';
import { BoardPage } from '@modules/about/pages/board/board.page';
import { HistoryPage } from '@modules/about/pages/history/history.page';
import { StockholdersPage } from '@modules/about/pages/stockholders/stockholders.page';
import { ContactUsPage } from '@modules/about/pages/contact-us/contact-us.page';
import { JobOppurtinitiesPage } from '@modules/job-oppurtinity/pages/job-oppurtinities/job-oppurtinities.page';
import { JobRequestPage } from '@modules/job-oppurtinity/pages/job-request/job-request.page';
import { CoursesPage } from '@modules/academy/pages/courses/courses.page';
import { PostsPage } from './modules/post/pages/posts/posts.page';
import { NewsPage } from './modules/news/pages/news/news.page';
import { CoursesCategoryPage } from './modules/academy/pages/courses-category/courses-category.page';
import { CourseDetailsPage } from './modules/academy/pages/course-details/course-details.page';
import { CourseContentPage } from './modules/academy/pages/course-content/course-content.page';
import { WorkshopPage } from './modules/academy/pages/workshop/workshop.page';

const routes: Routes = [
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
    path: 'academy',
    component: AcademyPage,
  },
  {
    path: 'workshop',
    component: WorkshopPage,
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
  {
    path: 'posts',
    component: PostsPage,
  },
  {
    path: 'news',
    component: NewsPage,
  },
  {
    path: 'job-oppurtinities',
    component: JobOppurtinitiesPage,
  },
  {
    path: 'job-request',
    component: JobRequestPage,
  },
  {
    path: 'about',
    children: [
      {
        path: '',
        component: AboutPage,
      },
      {
        path: 'employees',
        component: EmployeesPage,
      },
      {
        path: 'board',
        component: BoardPage,
      },
      {
        path: 'history',
        component: HistoryPage,
      },
      {
        path: 'stockholders',
        component: StockholdersPage,
      },
      {
        path: 'contact-us',
        component: ContactUsPage,
      },
    ],
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
