import { PostService } from './post-service';
import { Component, OnInit } from '@angular/core';

export interface Post {
title: string,
body: string
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post-component.css']
})

export class PostComponent implements OnInit {
  total: number;
  posts: Array<Post>;

  constructor(private postService: PostService){}

  private like() {
    this.total++;
  }

  private dislike() {
    if (this.total) this.total--;
  }

 ngOnInit(): void {}
//     this.postService.getPosts().subscribe(
//       (post: Array<Post>) => {
//         this.posts = post.map(post => {
// return {
//   ...post,
//   title: post.title.substr(0, 15),
//   body: post.body.substr(0, 50),
//   total:
// }
//         })
//       }
//     )
//   }
}
