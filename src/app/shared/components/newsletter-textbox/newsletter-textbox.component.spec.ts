import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterTextboxComponent } from './newsletter-textbox.component';

describe('NewsletterTextboxComponent', () => {
  let component: NewsletterTextboxComponent;
  let fixture: ComponentFixture<NewsletterTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
