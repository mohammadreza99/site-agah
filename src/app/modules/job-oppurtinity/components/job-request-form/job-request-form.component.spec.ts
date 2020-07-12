import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRequestFormComponent } from './job-request-form.component';

describe('JobRequestFormComponent', () => {
  let component: JobRequestFormComponent;
  let fixture: ComponentFixture<JobRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobRequestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
