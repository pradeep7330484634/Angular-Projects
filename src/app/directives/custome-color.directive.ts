import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appCustomeColor]'
})
export class CustomeColorDirective {
  constructor(private el: ElementRef, private renderer: Renderer) { 
    console.log(el);
    el.nativeElement.style.backgroundColor = "red";
    // renderer.setElementStyle(el.nativeElement, 'color', 'red'); 
  }
}
