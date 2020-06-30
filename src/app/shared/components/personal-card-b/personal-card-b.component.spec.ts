import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCardBComponent } from './personal-card-b.component';

describe('PersonalCardBComponent', () => {
  let component: PersonalCardBComponent;
  let fixture: ComponentFixture<PersonalCardBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalCardBComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCardBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
