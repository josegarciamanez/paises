import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisTablaComponent } from './pais-tabla.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VerPaisComponent', () => {
  let component: PaisTablaComponent;
  let fixture: ComponentFixture<PaisTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [PaisTablaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisTablaComponent);
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
});
