import { Component, Output, EventEmitter, Input } from '@angular/core';
import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { CommentItem } from '@app/shared/models';

@Component({
  selector: 'ag-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent extends LanguageChecker {
  constructor() {
    super();
  }
  @Input() comment: CommentItem = new CommentItem();
  @Input() isReply = false;
  @Output() replyClick = new EventEmitter<CommentItem>();
  // @ViewChild('container', { read: ViewContainerRef })
  // viewContainerRef: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   // this.appendReply(this.comment);
  // }

  // appendReply(comment) {
  //   if (comment.replies) {
  //     for (const c of comment.replies) {
  //       const factory = this.resolver.resolveComponentFactory(
  //         CommentItemComponent
  //       );
  //       const ref = this.viewContainerRef.createComponent(factory);
  //       ref.instance.isReply = true;
  //       ref.instance.comment = c;
  //       ref.changeDetectorRef.detectChanges();
  //     }
  //   }
  // }
}
