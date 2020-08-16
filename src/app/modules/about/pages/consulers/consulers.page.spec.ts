import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulersPage } from './consulers.page';

describe('ConsulersPage', () => {
  let component: ConsulersPage;
  let fixture: ComponentFixture<ConsulersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConsulersPage],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
