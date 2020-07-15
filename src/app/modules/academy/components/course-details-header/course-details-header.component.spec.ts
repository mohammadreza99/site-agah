import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsHeaderComponent } from './course-details-header.component';

describe('CourseDetailsHeaderComponent', () => {
  let component: CourseDetailsHeaderComponent;
  let fixture: ComponentFixture<CourseDetailsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
