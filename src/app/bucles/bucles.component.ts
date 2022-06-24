import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {

  personas: any[];

  constructor() { 
    this.personas = [
      { nombre: 'Mario', apellido: 'Figueroa', edad: 49 },
      { nombre: 'Juan', apellido: 'Lopez', edad: 36 },
      { nombre: 'Guido', apellido: 'Troncoso', edad: 25 },
      { nombre: 'Pamela', apellido: 'Rodrigez', edad: 58 },
    ]
  }

  ngOnInit(): void {
  }

  onClickAgregarPersona() {
    this.personas.push({
      nombre: 'Carla', apellido: 'Roldan', edad: 67
    });
  }

}
