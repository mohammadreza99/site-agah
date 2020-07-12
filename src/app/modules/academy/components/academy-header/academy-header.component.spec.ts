import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyHeaderComponent } from './academy-header.component';

describe('AcademyHeaderComponent', () => {
  let component: AcademyHeaderComponent;
  let fixture: ComponentFixture<AcademyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
