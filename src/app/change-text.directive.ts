import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(private Element : ElementRef) {
  	console.log(Element.nativeElement.innerText);
  	Element.nativeElement.innerText = 'Text changed';
  }

}
