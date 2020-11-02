import { TestComponent } from './components/test/test.component';
import { PostComponent } from './posts/post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '' , component: PostComponent },
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
