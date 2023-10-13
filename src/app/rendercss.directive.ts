import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendercss]'
})
export class RendercssDirective implements OnInit {

  @HostBinding('style.backgroundColor') bgColor : string = 'red'

  constructor(private _eleRef : ElementRef, private _rendrer : Renderer2) { }
  ngOnInit(): void {
    // this._rendrer.setStyle(this._eleRef.nativeElement, 'background-color', 'hotpink');
    this._rendrer.setStyle(this._eleRef.nativeElement, 'color', 'white');
    this._rendrer.setStyle(this._eleRef.nativeElement, 'padding', '15px');
    this._rendrer.setStyle(this._eleRef.nativeElement, 'font-size', '20px');
    // this._rendrer.addClass(this._eleRef.nativeElement, 'alert-info');
    // this._rendrer.addClass(this._eleRef.nativeElement, 'alert');
  }
  @HostListener('mouseover') onMouseHover(){
    // this._rendrer.setStyle(this._eleRef.nativeElement, 'background-color', 'darkblue')
    this.bgColor = 'darkblue'
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this._rendrer.setStyle(this._eleRef.nativeElement, 'background-color', 'hotpink')
    this.bgColor = 'red'
  }
}

