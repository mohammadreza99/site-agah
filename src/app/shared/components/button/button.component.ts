import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'ag-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  @Input() label: string;
  @Input() type = 'button';
  @Input() disabled: boolean;
  @Input() outline: boolean;
  @Input() raised: boolean;
  @Input() link: boolean;
  @Input() roundedSize: 'lg' | 'md' | 'xl' | 'none' = 'xl';

  ngOnInit(): void {
    this.el.nativeElement.classList.add(`ag-rounded-${this.roundedSize}`);
  }
}
