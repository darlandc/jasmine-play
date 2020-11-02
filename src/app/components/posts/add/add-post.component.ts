import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html'
})
export class AddPostComponent implements OnInit {
  addForm: FormGroup;
  error;

  constructor(private fb: FormBuilder){
    this.addForm = this.fb.group({
      id: Date.now,
      title: [],
      description: []
    });
  }

  ngOnInit(): void {}

}
