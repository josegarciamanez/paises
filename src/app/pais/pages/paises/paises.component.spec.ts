import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesComponent } from './paises.component';

describe('PaisesComponent', () => {
  let component: PaisesComponent;
  let fixture: ComponentFixture<PaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaisesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
