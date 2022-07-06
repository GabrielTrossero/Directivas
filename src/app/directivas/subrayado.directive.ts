import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSubrayado]'
})
export class SubrayadoDirective {

  @HostBinding('class') isHover: string;

  constructor(private elem: ElementRef, private renderer: Renderer2) { 
    //Al elemento sobre el cual le estoy aplicando la directiva, le modifico el style del texto
    //elem.nativeElement.style.textDecoration = 'underline';
    
    //Esto hace lo mismo que el de arriba pero de una forma idependiente de la plataforma que utilicemos 
    this.renderer.setStyle(this.elem.nativeElement, 'text-decoration', 'underline');
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo');
  }

  @HostListener('mouseover') onHover() {
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'green');
    this.isHover = 'hover';
  }
  
  @HostListener('mouseout') onMouseOut() {
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo');
    this.isHover = 'noHover';
  }

}
