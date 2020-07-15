import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFeaturesComponent } from './course-features.component';

describe('CourseFeaturesComponent', () => {
  let component: CourseFeaturesComponent;
  let fixture: ComponentFixture<CourseFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
