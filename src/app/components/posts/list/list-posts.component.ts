import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { Post } from '../interfaces/IPost';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html'
})
export class ListPostsComponent implements OnInit {
  total: number;
  posts: Array<Post>;
  error: number;

  constructor(private postService: PostService) {
    this.getAll();
  }

  private like(): any {
    this.total++;
  }

  private dislike(): any {
    if (this.total) {
      this.total--;
    }
  }

  ngOnInit(): void {
    console.log(3333333);
  }

  getAll(): void {
    this.postService.getPosts().subscribe(
      posts => {
        this.posts = posts;
      },
      err => {
        this.error = err.code;
      }
    );
  }

  tap(event): any {
    console.log(event);
  }

  delete(e): any {
    this.postService
      .deletePost(e)
      .subscribe(() =>
        this.posts.splice(this.posts.findIndex(post => post.id === e), 1)
      );
  }

  addPost(e): any {
    this.postService.addPost(e).subscribe((post: Post) => {
      this.posts.unshift({
        title: post.title.substr(0, 15),
        body: post.body.substr(0, 15),
        total: ~~(Math.random() * 10),
        id: post.id,
        userId: post.userId,
        myLike: false
      });
    });
  }
}
