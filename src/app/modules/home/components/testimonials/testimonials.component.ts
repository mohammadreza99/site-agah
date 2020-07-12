import { Component, OnInit, Input } from '@angular/core';
import { Testimonial } from '@shared/models/testimonial.model';

@Component({
  selector: 'ag-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  constructor() {}
  @Input() title: string;
  @Input() testimonials: Testimonial[];

  ngOnInit(): void {}
}
