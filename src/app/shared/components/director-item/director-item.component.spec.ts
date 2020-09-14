import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorItemComponent } from './director-item.component';

describe('DirectorItemComponent', () => {
  let component: DirectorItemComponent;
  let fixture: ComponentFixture<DirectorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
