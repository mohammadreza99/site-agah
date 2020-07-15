import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesIntroComponent } from './courses-intro.component';

describe('CoursesIntroComponent', () => {
  let component: CoursesIntroComponent;
  let fixture: ComponentFixture<CoursesIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
