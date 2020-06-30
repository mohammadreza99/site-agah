import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-testimonial-item',
  templateUrl: './testimonial-item.component.html',
  styleUrls: ['./testimonial-item.component.scss'],
})
export class TestimonialItemComponent implements OnInit {
  constructor() {}
  @Input() customerName: string;
  @Input() customerImage: string;
  @Input() projectName: string;
  @Input() comment: string;

  ngOnInit(): void {}
}
