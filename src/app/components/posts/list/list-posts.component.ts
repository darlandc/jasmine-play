import { Component, OnInit } from '@angular/core';
import { PostService } from './../../../services/post.service';
import { Post } from '../../../interfaces/IPost';
import { Observable } from 'rxjs';

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

  ngOnInit(): void {}

  getAll(): any {
    this.postService.getPosts().subscribe((posts: Array<Post>) => {
      this.posts = posts.map(post => {
        return {
          ...post,
          title: post.title,
          body: post.body,
          total: 0
        }
      });
    });
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
      debugger
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

  favorite(e){
    console.log(e);
  }

  addPostEvent(e): any {
    console.log(e);
    debugger
  }

}
