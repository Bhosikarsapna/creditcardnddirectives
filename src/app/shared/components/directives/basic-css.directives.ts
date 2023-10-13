import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector : '[basicCss]'
})

export class basicCssDirectives implements OnInit{
@Input() bgColor : string = 'pink'
   constructor(private eleRef : ElementRef){  // holds reference

   }

    ngOnInit(): void {
        console.log(this.eleRef.nativeElement);
        let para = this.eleRef.nativeElement;
        // para.style.backgroundColor = 'yellowgreen';
        para.style.backgroundColor = this.bgColor;
        para.style.padding = '20px';
        para.style.color = 'white';
        para.style.fontSize = '20px';
        para.style.marginTop = '20px'
    }

}