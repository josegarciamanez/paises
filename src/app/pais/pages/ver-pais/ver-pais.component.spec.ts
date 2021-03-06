import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPaisComponent } from './ver-pais.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VerPaisComponent', () => {
  let component: VerPaisComponent;
  let fixture: ComponentFixture<VerPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [VerPaisComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getLanguage() works correctly', () => {
    let spy = spyOn(component, 'getLanguage').and.callThrough();
    let language = { es: 'Spanish' };
    component.getLanguage(language);
    expect(spy).toHaveBeenCalledWith(language);
  });

  it('should getLanguage() return with no languages', () => {
    let spy = spyOn(component, 'getLanguage').and.callThrough();
    let language = undefined;
    component.getLanguage(language);
    expect(spy).toHaveBeenCalledWith(language);
  });

  it('should back() works correctly', () => {
    let spy = spyOn(component, 'back').and.callThrough();
    component.back();
    expect(spy).toHaveBeenCalled();
  });
});
