import { Component, OnInit, Input } from '@angular/core';
import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ag-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent extends LanguageChecker implements OnInit {
  constructor(private router: Router) {
    super();
  }

  url = window.location.href;

  ngOnInit(): void {}
}
