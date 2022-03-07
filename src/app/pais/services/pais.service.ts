import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  /**
   * Search all countries
   * @date 3/6/2022 - 8:06:30 PM
   *
   * @returns {Observable<Country[]>}
   */
  buscarPaises(): Observable<Country[]> {
    const url = `${this.apiUrl}/all`;
    return this.http.get<Country[]>(url);
  }

  /**
   * Find a country by name
   * @date 3/6/2022 - 8:06:52 PM
   *
   * @param {string} termino
   * @returns {Observable<Country[]>}
   */
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  /**
   * Search country for its capital
   * @date 3/6/2022 - 8:07:13 PM
   *
   * @param {string} termino
   * @returns {Observable<Country[]>}
   */
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  /**
   * Search country for its alpha2 code
   * @date 3/6/2022 - 8:07:56 PM
   *
   * @param {string} id
   * @returns {Observable<Country>}
   */
  // getPaisPorAlpha(id: string): Observable<Country> {
  //   const url = `${this.apiUrl}/alpha/${id}`;
  //   return this.http.get<Country>(url);
  // }
}
