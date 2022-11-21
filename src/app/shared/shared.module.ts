import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDirective } from './directives/post.directive';



@NgModule({
  declarations: [PostDirective],
  imports: [
    CommonModule
  ],
  exports:[PostDirective]
})
export class SharedModule { }
