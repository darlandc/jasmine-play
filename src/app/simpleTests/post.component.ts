import { Component } from '@angular/core';

export interface Post {

}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post-component.css']
})

export class PostComponent {
  total: number;

  private like() {
    this.total++;
  }

  private dislike() {
    if (this.total) this.total--;
  }
}
