import { Component, Input, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [],
})
export class PaisTablaComponent implements OnInit {
  @Input() paises: Country[] = [];

  constructor() {}

  ngOnInit(): void {}
  getLanguage(language: object) {
    if (language) {
      return Object.values(language)[0];
    }
    return;
  }
}
