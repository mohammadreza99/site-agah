import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPage } from '@modules/products/pages/products/products.page';

describe('ProductsPage', () => {
  let component: ProductsPage;
  let fixture: ComponentFixture<ProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
