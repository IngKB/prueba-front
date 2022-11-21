import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTagFormComponent } from './post-tag-form.component';

describe('PostTagFormComponent', () => {
  let component: PostTagFormComponent;
  let fixture: ComponentFixture<PostTagFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTagFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTagFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
