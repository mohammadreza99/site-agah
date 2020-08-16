import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsHeaderComponent } from './post-details-header.component';

describe('PostDetailsHeaderComponent', () => {
  let component: PostDetailsHeaderComponent;
  let fixture: ComponentFixture<PostDetailsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
