import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor(private _eleRef : ElementRef) { }

  @HostListener('input', ['$event'])
  validatedCreditCard(eve:Event){
    let inputControl = eve.target as HTMLInputElement;
    let val = inputControl.value as string;
    let spaceRemovedVal = (eve.target as HTMLInputElement).value.replace(/\s+/g, '');
    console.log(spaceRemovedVal);

    if(/[^\d]/.test(spaceRemovedVal)){
      inputControl.nextElementSibling?.classList.remove('d-none')
    }else{
      inputControl.nextElementSibling?.classList.add('d-none')
    }

    if(spaceRemovedVal.length > 16){
      spaceRemovedVal = spaceRemovedVal.substring(0, 16);
    }

    let chunkedArr = []
    for(let i = 0; i < spaceRemovedVal.length; i =  i+4){
       chunkedArr.push(spaceRemovedVal.slice(i, i + 4))
    }
    
    console.log(chunkedArr);

    (eve.target as HTMLInputElement).value = chunkedArr.join(' ');
  }
}
