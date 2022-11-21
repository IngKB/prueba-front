import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './services/post.service';
import { HeaderComponent } from './header/header.component';



@NgModule({
  providers: [PostService],
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent]
})
export class CoreModule { }
