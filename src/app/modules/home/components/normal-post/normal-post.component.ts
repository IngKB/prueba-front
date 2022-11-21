import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-normal-post',
  templateUrl: './normal-post.component.html',
  styleUrls: ['./normal-post.component.scss']
})
export class NormalPostComponent implements OnInit {

  @Input() post: Post | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
