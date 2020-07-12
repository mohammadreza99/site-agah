import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCoursesPage } from './all-courses.page';

describe('AllCoursesPage', () => {
  let component: AllCoursesPage;
  let fixture: ComponentFixture<AllCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCoursesPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
