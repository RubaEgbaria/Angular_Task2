
import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appif]'
})
export class ifdirective {
    private hasView = false;
  //  viewContainer: any;
    //templateRef: any;

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

    @Input() set appif(condition: boolean) {
        if (!condition && this.hasView) {
            // remove element
            this.viewContainer.clear();
            this.hasView = false;
            console.log( ' in if  ');
        }
         else if(condition && !this.hasView) {
                // add element
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.hasView = true
                console.log( ' in else if  ');
            }
             else 
            {
                console.log( ' in else ');
            }
    }
}