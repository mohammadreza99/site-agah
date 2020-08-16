import { Type } from '@angular/core';
import { PostsPage } from '@modules/post/pages/posts/posts.page';
import { PostDetailsPage } from '@modules/post/pages/post-details/post-details.page';
import { PostDetailsHeaderComponent } from '@modules/post/components/post-details-header/post-details-header.component';
import { CommentFormComponent } from '@modules/post/components/comment-form/comment-form.component';

export const COMPONENTS: Type<any>[] = [
  PostsPage,
  PostDetailsPage,
  PostDetailsHeaderComponent,
  CommentFormComponent,
];
