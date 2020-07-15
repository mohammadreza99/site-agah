import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-course-item-shadowed',
  templateUrl: './course-item-shadowed.component.html',
  styleUrls: ['./course-item-shadowed.component.scss'],
})
export class CourseItemShadowedComponent implements OnInit {
  constructor() {}

  @Input() course: any;

  ngOnInit(): void {}
}
