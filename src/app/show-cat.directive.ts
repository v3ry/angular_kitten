import { Directive,HostBinding,HostListener,Input,TemplateRef,ViewContainerRef  } from '@angular/core';

@Directive({
  selector: '[appShowCat]'
})
export class ShowCatDirective {
  @Input() set appDisplayCat(condition:boolean){
    if(condition){
      this.vwRef.createEmbeddedView(this.tplRef)
    }else{
      this.vwRef.clear();
    }
  }
  // @HostBinding('style.backgroundColor') myBackgroundColor?:string;

  // @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
  //   this.myBackgroundColor = 'yellow';
  // }

  // @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
  //   this.myBackgroundColor = 'transparent';
  // }
  constructor(private tplRef: TemplateRef<any>,private vwRef:ViewContainerRef) { }

}
