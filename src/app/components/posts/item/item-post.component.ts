import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../../interfaces/IPost';

@Component({
  selector: 'app-item-post',
  templateUrl: './item-post.component.html',
  styleUrls: ['./item-post.component.css']
})
export class ItemPostComponent implements OnInit {
  total: number = 0;
  posts: Array<Post>;
  error: number;

  @Input() post: Partial<Post>;
  @Output() deleteMe = new EventEmitter<number>();
  // @Output() outPosts = new EventEmitter();

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {}

  like(): void {
    this.post.myLike = true;
    this.post.total++;
    debugger
  }

  dislike(): void {
    this.post.myLike = false;
    this.post.total--;
  }

}
