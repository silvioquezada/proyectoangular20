import { Routes } from '@angular/router';
import { ReporteMensualidades } from './socio/components/reporte-mensualidades/reporte-mensualidades';
import { ListadoSocio } from './socio/components/socio/listado-socio/listado-socio';

export const routes: Routes = [
  { path: '', component: ListadoSocio },
  { path: 'socio', component: ListadoSocio },
  { path: 'reportemensualidades', component: ReporteMensualidades },
  { path: '**', redirectTo: '' }
];