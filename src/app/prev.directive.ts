import { Directive ,ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor( private el:ElementRef) { }
  @HostListener('click')
  preveeFunc(){
  var elm = this.el.nativeElement.parentElement.parentElement.parentElement.children[0];
  var item = elm.getElementsByClassName("item");
  elm.prepend(item[0])
  console.log(elm.prepend(item[item.length - 1]))
  }
}
