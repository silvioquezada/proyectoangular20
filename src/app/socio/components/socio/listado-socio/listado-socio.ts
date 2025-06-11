import { Component } from '@angular/core';
import { FormularioSocio } from '../formulario-socio/formulario-socio';
declare var $: any;

@Component({
  selector: 'app-listado-socio',
  imports: [FormularioSocio],
  templateUrl: './listado-socio.html',
  styleUrl: './listado-socio.css'
})
export class ListadoSocio {

  agregar(): void
  {
    $("#modalformulariosocio").modal("show");
  }
}
