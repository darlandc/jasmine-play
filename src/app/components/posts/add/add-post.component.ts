import { PostService } from 'src/app/services/post.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from './../../../interfaces/IPost';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html'
})
export class AddPostComponent implements OnInit {
  addForm: FormGroup;
  error;
  posts: any;
  @Output() addPostEvent = new EventEmitter();

  constructor(private fb: FormBuilder, private postService: PostService){
    this.addForm = this.fb.group({
      id: Math.random(),
      title: [''],
      description: ['']
    });
  }

  ngOnInit(): void {}

  add(){
    let value = this.addForm.controls.title.value;
    console.log(value);
    debugger
  }
}
