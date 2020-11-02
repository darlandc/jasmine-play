import { AddPostComponent } from './components/posts/add/add-post.component';
import { ListPostsComponent } from './components/posts/list/list-posts.component';
import { TestComponent } from './components/test/test.component';
import { ItemPostComponent } from './components/posts/item/item-post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '' , component: ListPostsComponent },
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
