import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOppurtinityItemComponent } from './job-oppurtinity-item.component';

describe('JobOppurtinityItemComponent', () => {
  let component: JobOppurtinityItemComponent;
  let fixture: ComponentFixture<JobOppurtinityItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOppurtinityItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOppurtinityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
