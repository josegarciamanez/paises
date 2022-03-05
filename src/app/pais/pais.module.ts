import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { ModalFlagComponent } from './components/modal-flag/modal-flag.component';

@NgModule({
  declarations: [
    PorPaisComponent,
    VerPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    PaisesComponent,
    ModalFlagComponent,
  ],
  exports: [
    PorPaisComponent,
    VerPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    PaisesComponent,
  ],
  imports: [CommonModule],
})
export class PaisModule {}
