import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsPage } from './course-details.page';

describe('CourseDetailsPage', () => {
  let component: CourseDetailsPage;
  let fixture: ComponentFixture<CourseDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
