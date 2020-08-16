import { Type } from '@angular/core';
import { AcademyPage } from '@modules/academy/pages/academy/academy.page';
import { AcademyHeaderComponent } from '@modules/academy/components/academy-header/academy-header.component';
import { CourseItemShadowedComponent } from '@modules/academy/components/course-item-shadowed/course-item-shadowed.component';
import { CoursesIntroComponent } from '@modules/academy/components/courses-intro/courses-intro.component';
import { NewsletterSubscribeComponent } from '@modules/academy/components/newsletter-subscribe/newsletter-subscribe.component';
import { CoursesPage } from '@modules/academy/pages/courses/courses.page';
import { NewsItemShadowedComponent } from '@modules/academy/components/news-item-shadowed/news-item-shadowed.component';
import { CoursesCategoryPage } from '@modules/academy/pages/courses-category/courses-category.page';
import { CourseDetailsPage } from '@modules/academy/pages/course-details/course-details.page';
import { CourseContentPage } from '@modules/academy/pages/course-content/course-content.page';
import { CourseFeaturesComponent } from '@modules/academy/components/course-features/course-features.component';
import { CourseDetailsHeaderComponent } from '@modules/academy/components/course-details-header/course-details-header.component';
import { CourseTimelineComponent } from '@modules/academy/components/course-timeline/course-timeline.component';
import { EducationSubscribeComponent } from '@modules/academy/components/education-subscribe/education-subscribe.component';
import { WorkshopPage } from '@modules/academy/pages/workshop/workshop.page';

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
  CourseFeaturesComponent,
  CourseDetailsHeaderComponent,
  CourseTimelineComponent,
  EducationSubscribeComponent,
];
