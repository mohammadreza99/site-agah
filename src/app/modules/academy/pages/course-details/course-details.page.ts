import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ScrollSpyService } from '@uniprank/ngx-scrollspy';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-course-details',
  templateUrl: './course-details.page.html',
  styleUrls: ['./course-details.page.scss'],
})
export class CourseDetailsPage extends LanguageChecker implements OnInit {
  constructor(private scrollSpyService: ScrollSpyService) {
    super();
  }

  @ViewChild('sideList') sideList: ElementRef;
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const sideList = this.sideList.nativeElement;
    const scrollTop = sideList.getBoundingClientRect().top;
    if (scrollTop === 90) {
      sideList.classList.add('ag-shadow-lg');
    } else {
      sideList.classList.remove('ag-shadow-lg');
    }
  }

  ngOnInit() {
    this.scrollSpyService.setOffset('window', 90);
  }

  scroll(el) {
    el.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
}
