import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTextboxComponent } from './course-textbox.component';

describe('CourseTextboxComponent', () => {
  let component: CourseTextboxComponent;
  let fixture: ComponentFixture<CourseTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
