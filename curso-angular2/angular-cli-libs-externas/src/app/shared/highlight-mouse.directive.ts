import { Directive, HostListener, ElementRef, Renderer, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setElementStyle(this._elementeRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this._renderer.setElementStyle(this._elementeRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }

  private backgroundColor: string;

  @HostBinding('style.backgroundColor')
  get setColor(){
    // codigo extras
    return this.backgroundColor;
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    // private _elementeRef: ElementRef, 
    // private _renderer: Renderer
  ) { }

}
