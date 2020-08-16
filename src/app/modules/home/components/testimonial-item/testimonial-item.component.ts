import { Component, Input, OnInit } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { Testimonial } from '@shared/models/testimonial.model';

@Component({
  selector: 'ag-testimonial-item',
  templateUrl: './testimonial-item.component.html',
  styleUrls: ['./testimonial-item.component.scss'],
})
export class TestimonialItemComponent extends LanguageChecker
  implements OnInit {
  @Input() testimonial: Testimonial;

  ngOnInit(): void {}
}
