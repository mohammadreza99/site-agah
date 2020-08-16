import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageCheckerComponent } from './language-checker.component';

describe('LanguageCheckerComponent', () => {
  let component: LanguageCheckerComponent;
  let fixture: ComponentFixture<LanguageCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
