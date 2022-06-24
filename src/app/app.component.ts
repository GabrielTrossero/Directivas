import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  propiedadesParrafo: any;
  mostrar: boolean;

  constructor() {
    this.propiedadesParrafo = {
      color: 'red', 
      fontSize: '25px'
    };

    this.mostrar = true;
  }

  cambiarColor(color: string) {
    switch (color) {
      case 'v':
        this.propiedadesParrafo.color = 'green';
        break;
      case 'r':
        this.propiedadesParrafo.color = 'red';
        break;
      case 'b':
        this.propiedadesParrafo.color = 'blue';
        break;
    }
  }

  onChange($event) {
    this.propiedadesParrafo.fontSize = $event.target.value + 'px';
  }

  onInput($event) {
    this.propiedadesParrafo.fontSize = $event.target.value + 'px';
  }

  onClickMostrar() {
    if (this.mostrar === true) {
      this.mostrar = false;
    }
    else this.mostrar = true;
  }

}
