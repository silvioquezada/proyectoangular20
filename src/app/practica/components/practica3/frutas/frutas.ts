import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-frutas',
  imports: [FormsModule, CommonModule],
  templateUrl: './frutas.html',
  styleUrl: './frutas.css'
})
export class Frutas {

  frutas: any = ["Manzana", "Naranja", "Pera"];

  
}
