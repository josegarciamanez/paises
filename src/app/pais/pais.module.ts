import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { ModalFlagComponent } from './components/modal-flag/modal-flag.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { RouterModule } from '@angular/router';
import { AgregarPaisComponent } from './pages/agregar-pais/agregar-pais.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountryFormComponent } from './components/country-form/country-form.component';

@NgModule({
  declarations: [
    PorPaisComponent,
    VerPaisComponent,
    PorCapitalComponent,
    PaisesComponent,
    ModalFlagComponent,
    PaisInputComponent,
    PaisTablaComponent,
    AgregarPaisComponent,
    CountryFormComponent,
  ],
  exports: [
    PorPaisComponent,
    VerPaisComponent,
    PorCapitalComponent,
    PaisesComponent,
    PaisInputComponent,
    PaisTablaComponent,
    CountryFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
  ],
})
export class PaisModule {}
