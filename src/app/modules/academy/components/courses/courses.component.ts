import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Input() courses: any[];

  ngOnInit(): void {}
}
