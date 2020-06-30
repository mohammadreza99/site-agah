import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinedHeaderComponent } from './lined-header.component';

describe('LinedHeaderComponent', () => {
  let component: LinedHeaderComponent;
  let fixture: ComponentFixture<LinedHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinedHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
