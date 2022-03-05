import { Component } from '@angular/core';
import { PaisService } from './pais/services/pais.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-paises';
  constructor() {}
}
