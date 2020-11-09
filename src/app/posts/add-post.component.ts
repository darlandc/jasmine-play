import { PostService } from 'src/app/services/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from './../interfaces/IPost';

@Component({
  selector: 'app-add-post-jasmine',
  templateUrl: './add-post.component.html',
})
export class AddPostComponent implements OnInit {

  @Output() addPost = new EventEmitter();
  @Input() post: Partial<Post>;
  @Output() deleteMe = new EventEmitter();
  addForm: FormGroup;
  error = false;
  posts: any;
  controls: {};
  id = 0;

  constructor(private fb: FormBuilder, private postService: PostService) {
    this.addForm = this.fb.group({
      id: null,
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  formSubmit() {
    if (!this.addForm.valid) {
      this.error = true;
      console.log('ERROR');
    } else {
      this.error = false;
      const e = {
        ...this.addForm.value,
        userId: 1,
        id: this.id++,
      };
      this.addPost.emit(e);
      console.log(e);
    }
  }

}
