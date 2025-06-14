import { Routes } from '@angular/router';
import { ReporteMensualidades } from './socio/components/reporte-mensualidades/reporte-mensualidades';
import { ListadoSocio } from './socio/components/socio/listado-socio/listado-socio';
import { Calculadora } from './practica/components/practica1/calculadora/calculadora';
import { Edades } from './practica/components/practica2/edades/edades';
import { Frutas } from './practica/components/practica3/frutas/frutas';

export const routes: Routes = [
  { path: '', component: ListadoSocio },
  { path: 'socio', component: ListadoSocio },
  { path: 'reportemensualidades', component: ReporteMensualidades },
  { path: 'calculadora', component: Calculadora },
  { path: 'edades', component: Edades },
  { path: 'frutas', component: Frutas },
  { path: '**', redirectTo: '' }
];