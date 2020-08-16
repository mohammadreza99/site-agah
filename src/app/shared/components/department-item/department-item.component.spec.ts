import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentItemComponent } from '@shared/components/department-item/department-item.component';

describe('DepartmentItemComponent', () => {
  let component: DepartmentItemComponent;
  let fixture: ComponentFixture<DepartmentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
