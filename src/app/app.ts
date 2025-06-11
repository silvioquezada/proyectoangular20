import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from './shared/components/encabezado/encabezado';
import { Menu } from './shared/components/menu/menu';
import { Pie } from './shared/components/pie/pie';
import { ReporteMensualidades } from './socio/components/reporte-mensualidades/reporte-mensualidades';
import { ListadoSocio } from './socio/components/socio/listado-socio/listado-socio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Encabezado, Menu, Pie, ListadoSocio, ReporteMensualidades],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'prueba3';
}