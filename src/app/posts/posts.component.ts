import { Post } from './../interfaces/IPost';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-jasmine',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  posts: Array<Post>;
  listPost: any;
  error: number;
  id = 0;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (res) => (
        (this.posts = Object.values(res)),
        this.posts.map((item) => {
            (item.myLike = false),
            (item.total = 0);
          return item
        })
      )
    );
  }

  tap(event): any {
    console.log(event);
  }

  delete(e): any {
    this.postService.deletePost(e).subscribe(() =>
      this.posts.splice(
        this.posts.findIndex((post) => post.id === e),
        1
      )
    );
  }

  addPost(e): any {
    this.postService.addPost(e).subscribe((post: Post) => {
      this.posts.unshift({
        title: post.title.substr(0, 15),
        body: post.body.substr(0, 15),
        total: 0,
        id: this.id++,
        userId: post.userId,
        myLike: false,
      });
    });
  }

}
