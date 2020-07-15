import { Type } from '@angular/core';
import { AcademyPage } from './pages/academy/academy.page';
import { AcademyHeaderComponent } from './components/academy-header/academy-header.component';
import { CourseItemShadowedComponent } from './components/course-item-shadowed/course-item-shadowed.component';
import { CoursesIntroComponent } from './components/courses-intro/courses-intro.component';
import { NewsletterSubscribeComponent } from './components/newsletter-subscribe/newsletter-subscribe.component';
import { CoursesPage } from './pages/courses/courses.page';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { NewsItemShadowedComponent } from './components/news-item-shadowed/news-item-shadowed.component';
import { CoursesCategoryPage } from './pages/courses-category/courses-category.page';
import { CourseDetailsPage } from './pages/course-details/course-details.page';
import { CourseContentPage } from './pages/course-content/course-content.page';
import { CourseFeaturesComponent } from './components/course-features/course-features.component';
import { CourseDetailsHeaderComponent } from './components/course-details-header/course-details-header.component';
import { OwnerInfoComponent } from './components/owner-info/owner-info.component';
import { CourseTimelineComponent } from './components/course-timeline/course-timeline.component';
import { EducationSubscribeComponent } from './components/education-subscribe/education-subscribe.component';
import { WorkshopPage } from './pages/workshop/workshop.page';

export const COMPONENTS: Type<any>[] = [
  AcademyPage,
  WorkshopPage,
  CoursesPage,
  CourseDetailsPage,
  CourseContentPage,
  CoursesCategoryPage,
  AcademyHeaderComponent,
  CourseItemShadowedComponent,
  NewsItemShadowedComponent,
  CoursesIntroComponent,
  NewsletterSubscribeComponent,
  InputSearchComponent,
  CourseFeaturesComponent,
  CourseDetailsHeaderComponent,
  OwnerInfoComponent,
  CourseTimelineComponent,
  EducationSubscribeComponent,
];
