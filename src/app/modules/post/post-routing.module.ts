import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsPage } from './pages/posts/posts.page';
import { PostDetailsPage } from './pages/post-details/post-details.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PostsPage,
        data: { breadcrumb: 'BREADCRUMBS.POSTS' },
      },
      {
        path: 'details/:postId',
        component: PostDetailsPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
