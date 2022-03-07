import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFlagComponent } from './modal-flag.component';

describe('ModalFlagComponent', () => {
  let component: ModalFlagComponent;
  let fixture: ComponentFixture<ModalFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalFlagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
