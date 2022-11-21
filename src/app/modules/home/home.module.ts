import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalPostComponent } from './components/normal-post/normal-post.component';
import { SlideshowPostComponent } from './components/slideshow-post/slideshow-post.component';
import { HomeComponent } from './pages/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalPostFormComponent } from './components/form/modal-post-form/modal-post-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostImageFormComponent } from './components/form/post-image-form/post-image-form.component';
import { PostTagFormComponent } from './components/form/post-tag-form/post-tag-form.component';


@NgModule({
  declarations: [
    HomeComponent,
    NormalPostComponent,
    ModalPostFormComponent,
    SlideshowPostComponent,
    PostImageFormComponent,
    PostTagFormComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
