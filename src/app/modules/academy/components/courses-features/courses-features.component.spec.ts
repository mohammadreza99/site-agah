import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesFeaturesComponent } from './courses-features.component';

describe('CoursesFeaturesComponent', () => {
  let component: CoursesFeaturesComponent;
  let fixture: ComponentFixture<CoursesFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
