import { Component, OnInit } from '@angular/core';
import { LanguageChecker } from '@app/shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent extends LanguageChecker implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
