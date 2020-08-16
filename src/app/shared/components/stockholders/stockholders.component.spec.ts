import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockholdersComponent } from './stockholders.component';

describe('StockholdersComponent', () => {
  let component: StockholdersComponent;
  let fixture: ComponentFixture<StockholdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockholdersComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
