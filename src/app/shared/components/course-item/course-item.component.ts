import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements OnInit {
  constructor() {}

  @Input() course: any;

  ngOnInit(): void {}
}
