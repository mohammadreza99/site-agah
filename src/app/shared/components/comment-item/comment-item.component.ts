import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { TranslationService } from '@app/core/services/translation.service';

@Component({
  selector: 'ag-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent extends LanguageChecker implements OnInit {
  constructor(private resolver: ComponentFactoryResolver) {
    super();
  }

  @Output() replyClick = new EventEmitter();
  @ViewChild('container', { read: ViewContainerRef })
  viewContainerRef: ViewContainerRef;

  isReply = false;
  ngOnInit(): void {}

  appendReply() {
    const factory = this.resolver.resolveComponentFactory(CommentItemComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.instance.isReply = true;
    ref.changeDetectorRef.detectChanges();
  }
}
