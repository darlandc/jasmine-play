import { PostService } from './../../services/post.service';
import { Post } from './../../interfaces/IPost';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {


  @Input() post: Partial<Post>;
  @Output() deleteMe = new EventEmitter();


  constructor(private postService: PostService) { }

  ngOnInit(): void {

  }

  like(){
    this.post.myLike = true;
    this.post.total++;
  }

}
