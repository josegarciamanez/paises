import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';

@NgModule({
  declarations: [PorPaisComponent, VerPaisComponent],
  exports: [PorPaisComponent, VerPaisComponent],
  imports: [CommonModule],
})
export class PaisModule {}
