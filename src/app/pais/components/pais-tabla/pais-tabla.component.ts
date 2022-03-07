import { Component, Input } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [],
})
export class PaisTablaComponent {
  @Input() paises: Country[] = [];

  /**
   * Recover the language from the Languages object
   * @date 3/6/2022 - 7:50:32 PM
   *
   * @param {object} language
   * @returns {*}
   */
  getLanguage(language?: object) {
    if (language) {
      return Object.values(language)[0];
    }
    return;
  }
}
