import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockholderItemComponent } from './stockholder-item.component';

describe('StockholderItemComponent', () => {
  let component: StockholderItemComponent;
  let fixture: ComponentFixture<StockholderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockholderItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockholderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
