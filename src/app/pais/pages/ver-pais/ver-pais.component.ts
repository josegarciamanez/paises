import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.buscarPais(id)))
      .subscribe((pais) => {
        this.pais = pais[0];
      });
  }

  /**
   * Recover the language from the Languages object
   * @date 3/6/2022 - 7:50:32 PM
   *
   * @param {object} language
   * @returns {*}
   */
  getLanguage(language: object) {
    if (language) {
      return Object.values(language)[0];
    }
    return;
  }

  /**
   * Go back
   * @date 3/6/2022 - 8:22:54 PM
   */
  back(): void {
    this.router.navigate(['/paises']);
  }
}
