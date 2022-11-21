import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild(PostDirective, { static: false })
  postContainer: PostDirective | undefined;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  ngAfterViewInit(){
    this.loadComponents();
  }
  loadComponents() {
    this.posts.forEach(post => {
      if (post.images!.length > 1) {
        const slidePostRef = this.postContainer!.viewContainerRef.createComponent(SlideshowPostComponent);
        slidePostRef.setInput('post', post);
        slidePostRef.changeDetectorRef.detectChanges()
      } else {
        const normalPostRef = this.postContainer!.viewContainerRef.createComponent(NormalPostComponent)
        normalPostRef.setInput('post', post);
        normalPostRef.changeDetectorRef.detectChanges()

      }
    });
  }
}
