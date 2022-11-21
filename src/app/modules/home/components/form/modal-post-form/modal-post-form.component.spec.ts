import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPostFormComponent } from './modal-post-form.component';

describe('ModalPostFormComponent', () => {
  let component: ModalPostFormComponent;
  let fixture: ComponentFixture<ModalPostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPostFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
