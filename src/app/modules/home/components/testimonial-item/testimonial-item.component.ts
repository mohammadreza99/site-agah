import { Component, OnInit, Input } from '@angular/core';
import { Testimonial } from '@shared/models/testimonial.model';

@Component({
  selector: 'ag-testimonial-item',
  templateUrl: './testimonial-item.component.html',
  styleUrls: ['./testimonial-item.component.scss'],
})
export class TestimonialItemComponent implements OnInit {
  constructor() {}

  @Input() testimonial: Testimonial;

  ngOnInit(): void {}
}
