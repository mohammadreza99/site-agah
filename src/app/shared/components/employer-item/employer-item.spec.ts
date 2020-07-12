import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerItemComponent } from '@shared/components/employer-item/employer-item.component';

describe('EmployerItemComponent', () => {
  let component: EmployerItemComponent;
  let fixture: ComponentFixture<EmployerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployerItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
