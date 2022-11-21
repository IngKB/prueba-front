import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './services/post.service';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  providers: [PostService],
  declarations: [
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports:[HeaderComponent]
})
export class CoreModule { }
