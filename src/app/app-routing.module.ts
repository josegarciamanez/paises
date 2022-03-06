import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './pais/pages/paises/paises.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { AgregarPaisComponent } from './pais/pages/agregar-pais/agregar-pais.component';
import { HomeComponent } from './pais/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'paises',
    component: PaisesComponent,
  },
  {
    path: 'pais',
    component: PorPaisComponent,
  },
  {
    path: 'capital',
    component: PorCapitalComponent,
  },
  {
    path: 'agregar',
    component: AgregarPaisComponent,
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
