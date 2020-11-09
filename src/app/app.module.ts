import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { PostService } from './services/post.service';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post.component';
import { AddPostComponent } from './posts/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    AddPostComponent
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
    PostsComponent,
    PostComponent,
    AddPostComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
