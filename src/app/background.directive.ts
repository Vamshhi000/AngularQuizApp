import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(private elRef:ElementRef,private renderr:Renderer2) { }
@Input() correctAnswer:boolean=false;

  @HostListener('click') onAnswered(){
    

   

    if(this.correctAnswer){
      this.renderr.setStyle(this.elRef.nativeElement,'background-color','green');
    }else{
      this.renderr.setStyle(this.elRef.nativeElement,'background-color','red');
      
    }
 
  }

}
