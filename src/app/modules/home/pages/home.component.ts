import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import { PostDirective } from 'src/app/shared/directives/post.directive';
import { Post } from 'src/app/shared/models/post';
import { NormalPostComponent } from '../components/normal-post/normal-post.component';
import { SlideshowPostComponent } from '../components/slideshow-post/slideshow-post.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];
  postsComponents: ComponentRef<any>[] =[]
  @ViewChild(PostDirective, { static: false })
  postContainer: PostDirective | undefined;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.updateView();
  }

  updateView(){
    this.postService.getPosts().subscribe(data=>{
      this.posts = data;
      this.removeComponents();
      this.loadComponents();
    });
  }
  removeComponents(){
    this.postsComponents.forEach(postComp => {
      postComp.destroy();
    });
  }
  loadComponents() {

    this.posts.forEach(post => {
      if (post.images!.length > 1) {
        const slidePostRef = this.postContainer!.viewContainerRef.createComponent(SlideshowPostComponent);
        slidePostRef.setInput('post', post);
        slidePostRef.changeDetectorRef.detectChanges()
        this.postsComponents.push(slidePostRef);
      } else {
        const normalPostRef = this.postContainer!.viewContainerRef.createComponent(NormalPostComponent)
        normalPostRef.setInput('post', post);
        normalPostRef.changeDetectorRef.detectChanges()
        this.postsComponents.push(normalPostRef);
      }
    });
  }
}
