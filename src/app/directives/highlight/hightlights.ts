import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHightlights]',
})
export class Hightlights {
  @Input('textColor') textColor:string = '#F5A327';
  constructor(
    private ele: ElementRef,
    private render: Renderer2
  ) {}

  @HostListener('mouseover') onHover() {
    this.ele.nativeElement.style.backgroundColor = this.textColor;
    this.render.addClass(this.ele.nativeElement,'directive-class')
    this.fontSize = '18px';
  }

  @HostListener('mouseleave') onLeave() {
    this.ele.nativeElement.style.backgroundColor = '#0000';
    this.render.removeClass(this.ele.nativeElement,'directive-class')
    this.fontSize = '';

  }

  @HostBinding('style.fontSize') fontSize = '';
}
