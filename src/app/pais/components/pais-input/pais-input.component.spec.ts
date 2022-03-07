import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { PaisInputComponent } from './pais-input.component';
import { AppModule } from '../../../app.module';

describe('ReplaceWithYourComponent: ', () => {
  let component: PaisInputComponent;
  let fixture: ComponentFixture<PaisInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaisInputComponent, AppModule],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should search() works correctly', () => {
    let spy = spyOn(component, 'search').and.callThrough();
    component.search();
    expect(spy).toHaveBeenCalled();
  });

  it('should pressedKey() works correctly', () => {
    let spy = spyOn(component, 'pressedKey').and.callThrough();
    component.pressedKey();
    expect(spy).toHaveBeenCalled();
  });
});
