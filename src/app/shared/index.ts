import { Type } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import { ServiceItemComponent } from '@shared/components/service-item/service-item.component';
import { LinedHeaderComponent } from '@shared/components/lined-header/lined-header.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { LogoComponent } from '@shared/components/logo/logo.component';
import { SocialNetworksComponent } from '@shared/components/social-networks/social-networks.component';
import { CarouselComponent } from '@shared/components/carousel/carousel.component';
import { ProductItemComponent } from '@shared/components/product-item/product-item.component';
import { ProductListComponent } from '@shared/components/product-list/product-list.component';
import { ServicesComponent } from '@shared/components/services/services.component';
import { FollowUsComponent } from '@shared/components/follow-us/follow-us.component';
import { VisionComponent } from '@shared/components/vision/vision.component';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { EmployersComponent } from '@shared/components/employers/employers.component';
import { EmployerItemComponent } from '@shared/components/employer-item/employer-item.component';
import { EmployeeItemComponent } from '@shared/components/employee-item/employee-item.component';
import { EmployeesComponent } from '@shared/components/employees/employees.component';
import { ClickOutsideDirective } from '@shared/directives/click-outside.directive';
import { DropdownComponent } from '@shared/components/dropdown/dropdown.component';
import { NewsletterTextboxComponent } from '@shared/components/newsletter-textbox/newsletter-textbox.component';
import { InputTextareaComponent } from '@shared/components/input-textarea/input-textarea.component';
import { InputDatepickerComponent } from '@shared/components/input-datepicker/input-datepicker.component';
import { InputRadioComponent } from '@shared/components/input-radio/input-radio.component';
import { InputFileComponent } from '@shared/components/input-file/input-file.component';
import { InputSelectComponent } from '@shared/components/input-select/input-select.component';
import { NewsItemComponent } from '@shared/components/news-item/news-item.component';
import { CourseItemComponent } from '@shared/components/course-item/course-item.component';
import { ContainerComponent } from './components/container/container.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { ShareComponent } from './components/share/share.component';
import { TagsComponent } from './components/tags/tags.component';

export const COMPONENTS: Type<any>[] = [
  ButtonComponent,
  InputTextComponent,
  InputTextareaComponent,
  InputDatepickerComponent,
  InputRadioComponent,
  InputFileComponent,
  InputSelectComponent,
  DropdownComponent,
  IconComponent,
  ContainerComponent,
  LogoComponent,
  SocialNetworksComponent,
  FollowUsComponent,
  LinedHeaderComponent,
  CarouselComponent,
  BreadcrumbComponent,
  ClickOutsideDirective,
  NewsletterTextboxComponent,
  CommentItemComponent,
  AccordionComponent,
  AccordionItemComponent,
  TagsComponent,
  ShareComponent,
  ///////////////////////
  EmployerItemComponent,
  EmployeeItemComponent,
  EmployersComponent,
  EmployeesComponent,
  ProductItemComponent,
  ServiceItemComponent,
  ProductListComponent,
  ServicesComponent,
  VisionComponent,
  PostItemComponent,
  NewsItemComponent,
  CourseItemComponent,
];
