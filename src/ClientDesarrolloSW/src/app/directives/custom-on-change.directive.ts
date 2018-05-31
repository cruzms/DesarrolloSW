import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCustomOnChange]'
})
export class CustomOnChangeDirective implements OnChanges {

  constructor(private el: ElementRef) { }

  @HostListener('change') ngOnChanges() { }

}
