import { Type } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import { LinedHeaderComponent } from '@shared/components/lined-header/lined-header.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { LogoComponent } from '@shared/components/logo/logo.component';
import { SocialNetworksComponent } from '@shared/components/social-networks/social-networks.component';
import { CarouselComponent } from '@shared/components/carousel/carousel.component';
import { ProductItemComponent } from '@shared/components/product-item/product-item.component';
import { ProductListComponent } from '@shared/components/product-list/product-list.component';
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
import { ContainerComponent } from '@shared/components/container/container.component';
import { PostItemComponent } from '@shared/components/post-item/post-item.component';
import { CommentItemComponent } from '@shared/components/comment-item/comment-item.component';
import { AccordionComponent } from '@shared/components/accordion/accordion.component';
import { AccordionItemComponent } from '@shared/components/accordion-item/accordion-item.component';
import { ShareComponent } from '@shared/components/share/share.component';
import { TagsComponent } from '@shared/components/tags/tags.component';
import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentItemComponent } from './components/department-item/department-item.component';
import { DotsPipe } from './pipes/dots.pipe';
import { StockholderItemComponent } from './components/stockholder-item/stockholder-item.component';
import { StockholdersComponent } from './components/stockholders/stockholders.component';
import { CourseTextboxComponent } from './components/course-textbox/course-textbox.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import {AuthorComponent} from "./components/author/author.component";
export const COMPONENTS: Type<any>[] = [
  ButtonComponent,
  InputTextComponent,
  InputTextareaComponent,
  InputDatepickerComponent,
  InputRadioComponent,
  InputFileComponent,
  InputSelectComponent,
  InputSearchComponent,
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
 AuthorComponent,
  LanguageChecker,
  DotsPipe,
  ///////////////////////
  EmployerItemComponent,
  EmployeeItemComponent,
  EmployersComponent,
  EmployeesComponent,
  ProductItemComponent,
  DepartmentsComponent,
  DepartmentItemComponent,
  ProductListComponent,
  VisionComponent,
  PostItemComponent,
  NewsItemComponent,
  CourseItemComponent,
  StockholderItemComponent,
  StockholdersComponent,
  CourseTextboxComponent,
];
