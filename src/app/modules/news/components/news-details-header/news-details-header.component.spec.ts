import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailsHeaderComponent } from './news-details-header.component';

describe('NewsDetailsHeaderComponent', () => {
  let component: NewsDetailsHeaderComponent;
  let fixture: ComponentFixture<NewsDetailsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDetailsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
