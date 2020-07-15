import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';

@Component({
  selector: 'ag-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  constructor(private resolver: ComponentFactoryResolver) {}

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
