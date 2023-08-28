import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { PostComponent } from './components/post/post.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: UserLoginComponent},
  {path: 'posts', component: PostsComponent, canActivate:[authGuard]},
  {path: 'posts/:id', component: PostComponent, canActivate:[authGuard]},
  {path: '**', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
