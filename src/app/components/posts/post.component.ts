import { Component, OnInit } from '@angular/core';
import { Post } from './interfaces/IPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post-component.css']
})
export class PostComponent implements OnInit {
  total: number;

  ngOnInit(): void {}

  like(): void {
    this.total++;
  }

  dislike(): void {
    if (this.total) {
      this.total--;
    }
  }
}
