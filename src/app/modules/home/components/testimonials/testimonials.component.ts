import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Testimonial } from '@shared/models';

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
