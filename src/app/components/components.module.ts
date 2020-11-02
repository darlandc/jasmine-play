import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ItemPostComponent } from './posts/item/item-post.component';
import { AddPostComponent } from './posts/add/add-post.component';
import { TestComponent } from './test/test.component';
import { ListPostsComponent } from './posts/list/list-posts.component';

@NgModule({
  declarations: [
    ItemPostComponent,
    AddPostComponent,
    ListPostsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    ItemPostComponent,
    AddPostComponent,
    ListPostsComponent,
    TestComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class ComponentsModule { }
