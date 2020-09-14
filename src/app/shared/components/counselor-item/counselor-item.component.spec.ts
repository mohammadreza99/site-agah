import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselorItemComponent } from './counselor-item.component';

describe('CounselorItemComponent', () => {
  let component: CounselorItemComponent;
  let fixture: ComponentFixture<CounselorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounselorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
