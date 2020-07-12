import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOppurtinitiesPage } from './job-oppurtinities.page';

describe('JobOppurtinitiesPage', () => {
  let component: JobOppurtinitiesPage;
  let fixture: ComponentFixture<JobOppurtinitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOppurtinitiesPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOppurtinitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
