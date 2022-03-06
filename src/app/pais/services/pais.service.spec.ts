import { TestBed } from '@angular/core/testing';
import { PaisService } from './pais.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('PaisService', () => {
  let service: PaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaisService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should return an Observable<Country[]>', () => {
    expect(service.buscarPaises()).toBeTruthy();
    expect(service.buscarPaises()).toBeInstanceOf(Observable);
  });
});
