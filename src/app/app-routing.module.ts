import { PostsComponent } from './posts/posts.component';
import { ListPostsComponent } from './components/posts/list/list-posts.component';
import { TestComponent } from './components/test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '' , component: PostsComponent },
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
