import { Component, Input, OnInit } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import {  Teacher } from '@shared/models';

@Component({
  selector: 'ag-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent extends LanguageChecker implements OnInit {
  @Input() title: string;
  @Input() author: Teacher;

  ngOnInit(): void {}
}
