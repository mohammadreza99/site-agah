import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailsPage } from './news-details.page';

describe('NewsDetailsPage', () => {
  let component: NewsDetailsPage;
  let fixture: ComponentFixture<NewsDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDetailsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
