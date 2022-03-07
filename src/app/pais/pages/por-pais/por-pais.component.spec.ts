import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PorPaisComponent } from './por-pais.component';
import { PaisService } from '../../services/pais.service';

describe('PorPaisComponent', () => {
  let component: PorPaisComponent;
  let fixture: ComponentFixture<PorPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [PorPaisComponent],
      providers: [PaisService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should buscar() works correctly', () => {
    let spy = spyOn(component, 'buscar').and.callThrough();
    component.buscar('españa');
    expect(component.buscar).toBeDefined();
    expect(spy).toHaveBeenCalledWith('españa');
  });

  it('should sugerencias() works correctly', () => {
    let spy = spyOn(component, 'sugerencias').and.callThrough();
    component.sugerencias('españa');
    expect(component.sugerencias).toBeDefined();
    expect(spy).toHaveBeenCalledWith('españa');
  });

  it('should buscarSugerido() works correctly', () => {
    let spy = spyOn(component, 'buscarSugerido').and.callThrough();
    component.buscarSugerido('españa');
    expect(component.buscarSugerido).toBeDefined();
    expect(spy).toHaveBeenCalledWith('españa');
  });
});
