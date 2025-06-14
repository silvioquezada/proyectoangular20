import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edades',
  imports: [FormsModule, CommonModule],
  templateUrl: './edades.html',
  styleUrl: './edades.css'
})
export class Edades {
  edad: number = 0;
  resultado: string = "";

  calcular()
  {
    if(this.edad >= 18)
    {
      this.resultado = "mayor";
    }
    else
    {
      this.resultado = "menor";
    }
  }
}
