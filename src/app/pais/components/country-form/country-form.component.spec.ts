import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { CountryFormComponent } from './country-form.component';
import Swal from 'sweetalert2';
import { AppRoutingModule } from '../../../app-routing.module';
import { PaisModule } from '../../pais.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

describe('CountryFormComponent', () => {
  let component: CountryFormComponent;
  let fixture: ComponentFixture<CountryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule,
        AppRoutingModule,
        PaisModule,
        SharedModule,
        RouterModule,
      ],
      declarations: [CountryFormComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                id: of({ id: 'España' }),
              },
            },
          },
        },
        PaisService,
        FormBuilder,
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should getLanguage() works correctly', () => {
    let spy = spyOn(component, 'getLanguage').and.callThrough();
    let language = [{ es: 'Spanish' }];
    component.getLanguage(language);
    expect(spy).toHaveBeenCalledWith(language);
  });

  it('should getLanguage() return with no languages', () => {
    let spy = spyOn(component, 'getLanguage').and.callThrough();
    let language = undefined;
    component.getLanguage(language);
    expect(spy).toHaveBeenCalledWith(language);
  });

  it('should setValues() works correctly', () => {
    let spy = spyOn(component, 'setValues').and.callThrough();
    component.setValues();
    expect(spy).toHaveBeenCalled();
  });

  it('should fieldIsValid() works correctly', () => {
    let spy = spyOn(component, 'fieldIsValid').and.callThrough();
    component.fieldIsValid('nombre');
    expect(spy).toHaveBeenCalledWith('nombre');
  });

  it('should saveCountry() works correctly', () => {
    let spy = spyOn(component, 'saveCountry').and.callThrough();
    component.saveCountry();
    expect(spy).toHaveBeenCalled();
  });

  it('should Swal woks correctly', () => {
    let spy = spyOn(Swal, 'fire').and.callThrough();
    expect(spy).toHaveBeenCalled();
  });
});
