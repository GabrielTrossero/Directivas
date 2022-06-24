import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  cadenaClases: string;
  vectorClases: string[];

  constructor() { 
    this.cadenaClases = 'semaforo redondo rojo';
    this.vectorClases = ['semaforo'];
    this.vectorClases.push('redondo');
    this.vectorClases.push('rojo');
  }

  ngOnInit(): void {
  }

}
