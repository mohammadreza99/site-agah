import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOppurtinitiesComponent } from './job-oppurtinities.component';

describe('JobOppurtinitiesComponent', () => {
  let component: JobOppurtinitiesComponent;
  let fixture: ComponentFixture<JobOppurtinitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOppurtinitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOppurtinitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
