import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemShadowedComponent } from './news-item-shadowed.component';

describe('NewsItemShadowedComponent', () => {
  let component: NewsItemShadowedComponent;
  let fixture: ComponentFixture<NewsItemShadowedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItemShadowedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemShadowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
