import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AddPostComponent } from './posts/add-post.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { PostComponent } from './posts/post.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestComponent } from './components/test/test.component';
/* import { ListPostComponent } from '';
import { UsersComponent } from '';
import { NotFoundComponent } from ''; */

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AddPostComponent,
    TestComponent
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
    PostComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
