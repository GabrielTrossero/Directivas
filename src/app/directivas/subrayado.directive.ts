import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSubrayado]'
})
export class SubrayadoDirective {

  constructor(elem: ElementRef) { 
    //Al elemento sobre el cual le estoy aplicando la directiva, le modifico el style del texto
    elem.nativeElement.style.textDecoration = 'underline';
  }

}
