import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from './interfaces/IPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post-component.css']
})
export class PostComponent implements OnInit {
  total: number = 0;
  posts: Array<Post>;
  error: number;

  @Input() post: Partial<Post>;
  @Output() deleteMe = new EventEmitter<number>();
  @Output() outPosts = new EventEmitter();

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {}

  like(): void {
    this.post.myLike = true;
    this.post.total++;
  }

  dislike(): void {
    this.post.myLike = false;
    this.post.total--;
  }

  getAll(): void {
    this.postService.getPosts().subscribe(
      posts => {
        this.posts = posts;
        // this.outPosts.emit(this.posts);
      },
      err => {
        this.error = err.code;
      }
    );
  }

}
