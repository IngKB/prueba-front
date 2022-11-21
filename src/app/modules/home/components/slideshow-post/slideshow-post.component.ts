import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-slideshow-post',
  templateUrl: './slideshow-post.component.html',
  styleUrls: ['./slideshow-post.component.scss']
})
export class SlideshowPostComponent implements OnInit,OnChanges {

  @Input() post: Post | undefined;
  
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
  }
}
