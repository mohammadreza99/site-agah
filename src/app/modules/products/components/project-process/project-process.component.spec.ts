import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProcessComponent } from './project-process.component';

describe('ProjectProcessComponent', () => {
  let component: ProjectProcessComponent;
  let fixture: ComponentFixture<ProjectProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
