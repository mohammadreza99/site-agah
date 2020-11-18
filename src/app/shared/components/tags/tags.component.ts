import { Component, OnInit, Input } from '@angular/core';
import { LanguageChecker } from '../language-checker/language-checker.component';

@Component({
  selector: 'ag-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent extends LanguageChecker implements OnInit {
  constructor() {
    super();
  }

  @Input() tags: any[] = [];

  ngOnInit(): void {}
}
