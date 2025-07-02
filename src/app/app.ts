import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from './shared/components/encabezado/encabezado';
import { Menu } from './shared/components/menu/menu';
import { Pie } from './shared/components/pie/pie';
import { ReporteMensualidades } from './socio/components/reporte-mensualidades/reporte-mensualidades';
import { ListadoSocio } from './socio/components/socio/listado-socio/listado-socio';
import { Calculadora } from './practica/components/practica1/calculadora/calculadora';
import { Listar } from './estudiante/components/listar/listar';
import { Formulario } from './estudiante/components/formulario/formulario';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Encabezado, Menu, Pie, ListadoSocio, ReporteMensualidades, Calculadora, Listar, Formulario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'prueba3';
}