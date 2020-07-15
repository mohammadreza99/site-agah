import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCategoryPage } from './courses-category.page';

describe('CoursesCategoryPage', () => {
  let component: CoursesCategoryPage;
  let fixture: ComponentFixture<CoursesCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesCategoryPage],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
