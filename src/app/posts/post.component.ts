import { PostService } from './../services/post.service';
import { Post } from './../interfaces/IPost';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-jasmine',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  total: number = 0;
  posts: any;
  error: number;

  @Input() post: Partial<Post>;
  @Output() deleteMe = new EventEmitter<number>();

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  like(): void {
    this.post.myLike = true;
    this.post.total++;
  }

  dislike(): void {
    this.post.myLike = false;
    this.post.total--;
  }
}
