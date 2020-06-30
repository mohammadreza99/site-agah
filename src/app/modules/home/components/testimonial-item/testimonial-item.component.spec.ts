import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialItemComponent } from './testimonial-item.component';

describe('TestimonialItemComponent', () => {
  let component: TestimonialItemComponent;
  let fixture: ComponentFixture<TestimonialItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
