import { Component } from '@angular/core';
import { Estudiante } from '../../services/estudiante';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-listar',
  imports: [CommonModule, FormsModule],
  templateUrl: './listar.html',
  styleUrl: './listar.css'
})
export class Listar {

  datos: any = [];

  constructor(private estudianteservice: Estudiante, private cdr: ChangeDetectorRef) { }

 
  ngOnInit(): void {
   this.obtenerListado();
  }

  obtenerListado()
  {
    this.estudianteservice.obtenerListado().subscribe( (data : any) =>
    {
      this.datos = data;
      this.cdr.detectChanges();
    }, err => {
      console.log("Error");
    });
    
  }

  agregar(): void
  {
    $("#modalformulariosocio").modal("show");
  }

}

