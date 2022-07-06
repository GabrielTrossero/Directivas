import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSubrayado]'
})
export class SubrayadoDirective {

  constructor(elem: ElementRef, renderer: Renderer2) { 
    //Al elemento sobre el cual le estoy aplicando la directiva, le modifico el style del texto
    //elem.nativeElement.style.textDecoration = 'underline';
    
    //Esto hace lo mismo que el de arriba pero de una forma idependiente de la plataforma que utilicemos 
    renderer.setStyle(elem.nativeElement, 'text-decoration', 'underline');
  }

}
