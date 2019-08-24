import { Directive, ElementRef, HostListener, Input } from '@angular/core';
 
@Directive({
selector: '[myHighlight]'
})
 
export class HighlightDirective {
 
constructor(private el: ElementRef) { }
@Input() defaultColor: string;
@Input('myHighlight') highlightColor: string;
 
@HostListener('click') onClicks() {
  this.highlight("highliight");
}
 
@HostListener('dbclick') onDoubleclick() {
  this.highlight(null);
}
 
private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = "rgb(52, 201, 52)";
}
 
}