import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appManipulate]'
})
export class ManipulateDirective {

  constructor() { }
  @HostBinding ('style.width') w:string='';
  @HostBinding('style.heigth') h:string='';
  @HostBinding('style.transition') tran:string='';
  @HostBinding('style.background-image') logo:string='';



  @HostListener ('mouseenter') onhover(){
    this.w='180px'
    this.tran='0.2s'
  }


  @HostListener ('mouseleave') onhoverout(){
    this.w=''
    this.tran='0.2s'
    this.logo=''

  }


}
