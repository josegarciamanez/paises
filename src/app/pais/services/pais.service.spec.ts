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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
