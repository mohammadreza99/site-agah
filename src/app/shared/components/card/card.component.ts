import { Component, OnInit, Input } from '@angular/core';

import { BlogPost } from '@shared/models/blog-post.model';

@Component({
  selector: 'ag-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input() cardItem: BlogPost;

  get isNews() {
    return this.cardItem instanceof BlogPost;
  }

  get isBlog() {
    return this.cardItem instanceof BlogPost;
  }

  // get isCourse() {
  // return this.cardItem instanceof ;
  // }

  ngOnInit(): void {}
}
