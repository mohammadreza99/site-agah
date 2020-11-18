import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { CommentItem, Post } from '@shared/models';
import { ContactService, MultimediaService } from '@core/http';
import { LanguageChecker } from '@app/shared/components/language-checker/language-checker.component';
import { cpuUsage } from 'process';

@Component({
  selector: 'ag-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage extends LanguageChecker implements OnInit {
  constructor(
    private multimediaService: MultimediaService,
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {
    super();
  }

  posts$: Observable<Post[]>;
  post: Post;
  comments$: Observable<CommentItem[]>;
  commentableType: 'post' | 'comment';
  commentableId: any;
  replyComment: any;
  showSuccess = false;

  ngOnInit(): void {
    this.posts$ = this.multimediaService.getPosts();
    this.route.params
      .pipe(
        flatMap((params) => {
          return this.multimediaService.getPostById(params['postId']);
        })
      )
      .subscribe((post) => {
        this.post = post;
        this.commentableId = this.post.id;
        this.commentableType = 'post';
        if (this.post.tags) {
          const tags = this.post.tags.map((t) => t.tag);
          this.posts$ = this.multimediaService.getPostsByTags(
            tags,
            this.post.id
          );
        }
      });
  }

  onReplyClick(comment, el: HTMLElement) {
    this.commentableType = 'comment';
    this.replyComment = comment;
    this.commentableId = comment.id;
    el.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  onCancelReply() {
    this.replyComment = null;
    this.commentableType = 'post';
    this.commentableId = this.post.id;
  }

  onSubmitComment(formValue) {
    Object.assign(formValue, {
      commentable_id: this.commentableId,
      commentable_type: this.commentableType,
    });
    this.contactService.postComment(formValue).subscribe(() => {
      this.showSuccess = true;
      this.commentableId = this.post.id;
      this.commentableType = 'post';
      setTimeout(() => {
        this.showSuccess = false;
      }, 2000);
    });
  }
}
