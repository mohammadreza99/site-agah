import { Component, OnInit } from '@angular/core';
import { ScrollSpyService } from '@uniprank/ngx-scrollspy';

@Component({
  selector: 'ag-course-details',
  templateUrl: './course-details.page.html',
  styleUrls: ['./course-details.page.scss'],
})
export class CourseDetailsPage implements OnInit {
  constructor(private scrollSpyService: ScrollSpyService) {}

  ngOnInit() {
    this.scrollSpyService.setOffset('window', 90);
  }

  scroll(el) {
    el.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
}
