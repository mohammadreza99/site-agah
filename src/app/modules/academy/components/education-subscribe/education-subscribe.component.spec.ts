import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSubscribeComponent } from './education-subscribe.component';

describe('EducationSubscribeComponent', () => {
  let component: EducationSubscribeComponent;
  let fixture: ComponentFixture<EducationSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
