import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(
    private el : ElementRef
  ) { }

  // @Input("appDirectiveOther") format;
  @Input("") format;

  @HostListener("focus") onFocus() {
    console.log("On focus")
  }

  @HostListener("blur") onBlur() {
    console.log("On blur")
    let value : string = this.el.nativeElement.value;
    if(this.format == "lowercase") {
      this.el.nativeElement.value = value.toUpperCase();
    } else {
      this.el.nativeElement.value = value.toLowerCase();
    }
  }

}
