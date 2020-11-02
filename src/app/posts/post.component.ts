import { PostService } from './post-service';
import { Component, OnInit } from '@angular/core';
import { Post } from './IPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post-component.css']
})

export class PostComponent implements OnInit {
  total: number;
  posts: Array<Post>;

  constructor(private postService: PostService){
    this.getAll();
  }

  private like() {
    this.total++;
  }

  private dislike() {
    if (this.total) this.total--;
  }

 ngOnInit(): void {
 }

 getAll(){
   this.postService.getPosts().subscribe(
     res => console.log(this.posts = res),
     err => alert(err)
   )
 }

 tap(event){
  console.log(event);
 }

 delete(e){
   this.postService.deletePost(e).subscribe(()=> this.posts.splice(this.posts.findIndex(post => post.id == e), 1));

}

 addPost(e){
  this.postService.addPost(e).subscribe(
  (post: Post) => {
    this.posts.unshift({
      title: post.title.substr(0, 15),
      body: post.body.substr(0, 15),
      total: ~~(Math.random() * 10),
      id: post.id,
      userId: post.userId,
      myLike: false
    })
  })
}

}
