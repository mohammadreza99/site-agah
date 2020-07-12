import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsHeaderComponent } from '@modules/products/components/product-details-header/product-details-header.component';

describe('ProductDetailsHeaderComponent', () => {
  let component: ProductDetailsHeaderComponent;
  let fixture: ComponentFixture<ProductDetailsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
