import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProductItemComponent } from '@modules/products/components/other-product-item/other-product-item.component';

describe('OtherProductItemComponent', () => {
  let component: OtherProductItemComponent;
  let fixture: ComponentFixture<OtherProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OtherProductItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
