import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Input() label: string;
  @Input() type = 'button';
  @Input() outline: boolean;
  @Input() raised: boolean;
  @Input() link: boolean;
  @Input() roundedSize: 'lg' | 'md' | 'xl' = 'xl';

  ngOnInit(): void {}
}
