import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCardAComponent } from './personal-card-a.component';

describe('PersonalCardAComponent', () => {
  let component: PersonalCardAComponent;
  let fixture: ComponentFixture<PersonalCardAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalCardAComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCardAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
