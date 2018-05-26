import { Directive, HostListener, ElementRef, Renderer, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }


  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  private backgroundColor: string;

  @HostBinding('style.backgroundColor')
  get setColor(){
    return this.backgroundColor;
  }

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}
