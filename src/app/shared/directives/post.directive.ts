import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[postHost]'
})
export class PostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
