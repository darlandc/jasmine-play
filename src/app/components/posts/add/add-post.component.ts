import { PostService } from 'src/app/services/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from './../../../interfaces/IPost';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html'
})
export class AddPostComponent implements OnInit {
  addForm: FormGroup;
  error;
  posts: any;
  // post: {};
  controls: {};
  @Output() addPostEvent = new EventEmitter();

  @Input() post: Partial<Post>;
  @Output() deleteMe = new EventEmitter();

  constructor(private fb: FormBuilder, private postService: PostService){
    this.addForm = this.fb.group({
      id: Math.random(),
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  addPost(){
    const valid = this.addForm.valid;
    this.controls = this.addForm.controls;
    if(!valid){
      this.error = true;
    } else {
/*         this.post = {
          id: this.controls['id'].value,
          title: this.controls['title'].value,
          description: this.controls['description'].value
        } */
        this.addPostEvent.emit(this.post);
      }
      // debugger
  } // end of add()

}
