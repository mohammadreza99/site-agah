import { Component, Input, OnInit } from '@angular/core';
import { Testimonial } from '@shared/models';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'ag-testimonial-item',
  templateUrl: './testimonial-item.component.html',
  styleUrls: ['./testimonial-item.component.scss'],
})
export class TestimonialItemComponent
  extends LanguageChecker
  implements OnInit {
  @Input() testimonial: Testimonial;

  ngOnInit(): void {}
}
