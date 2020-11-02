import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AddPostComponent } from './components/posts/add/add-post.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { PostComponent } from './components/posts/post.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestComponent } from './components/test/test.component';
import { ListPostsComponent } from './components/posts/list/list-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AddPostComponent,
    TestComponent,
    ListPostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    AppComponent,
    PostComponent,
    AddPostComponent,
    TestComponent,
    ListPostsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
