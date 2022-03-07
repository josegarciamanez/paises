import { TestBed } from '@angular/core/testing';
import { PaisService } from './pais.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

describe('PaisService', () => {
  let service: PaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaisService, ActivatedRoute, Router],
      imports: [HttpClientTestingModule, Observable],
    });
    service = TestBed.inject(PaisService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should return an Observable<Country[]>', () => {
    expect(service.buscarPaises()).toBeTruthy();
    expect(service.buscarPaises()).toBeInstanceOf(Observable);
  });
});
