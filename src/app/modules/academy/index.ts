import { Type } from '@angular/core';
import { AcademyPage } from './pages/academy/academy.page';
import { AcademyHeaderComponent } from './components/academy-header/academy-header.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CoursesFeaturesComponent } from './components/courses-features/courses-features.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { NewsComponent } from './components/news/news.component';
import { NewsletterSubscribeComponent } from './components/newsletter-subscribe/newsletter-subscribe.component';
import { AllCoursesPage } from './pages/all-courses/all-courses.page';
import { CoursesPage } from './pages/courses/courses.page';

export const COMPONENTS: Type<any>[] = [
  AcademyPage,
  AcademyHeaderComponent,
  CourseItemComponent,
  CoursesComponent,
  CoursesFeaturesComponent,
  NewsItemComponent,
  NewsComponent,
  NewsletterSubscribeComponent,
  AllCoursesPage,
  CoursesPage,
];
