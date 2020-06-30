import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  constructor() {}
  @Input() testimonials: any[];
  ngOnInit(): void {}
}
