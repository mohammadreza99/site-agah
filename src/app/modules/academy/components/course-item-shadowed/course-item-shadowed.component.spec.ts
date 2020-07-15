import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemShadowedComponent } from './course-item-shadowed.component';

describe('CourseItemShadowedComponent', () => {
  let component: CourseItemShadowedComponent;
  let fixture: ComponentFixture<CourseItemShadowedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemShadowedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemShadowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
