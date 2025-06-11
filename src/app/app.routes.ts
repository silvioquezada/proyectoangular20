import { Routes } from '@angular/router';
import { Socio } from './socio/components/socio/socio';
import { ReporteMensualidades } from './socio/components/reporte-mensualidades/reporte-mensualidades';

export const routes: Routes = [
  { path: '', component: Socio },
  { path: 'socio', component: Socio },
  { path: 'reportemensualidades', component: ReporteMensualidades },
  { path: '**', redirectTo: '' }
];