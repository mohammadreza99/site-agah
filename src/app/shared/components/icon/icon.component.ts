import { Component, OnInit, Input } from '@angular/core';
import { IconStyle, IconSize, IconRotation } from '../../models/icon.model';

@Component({
  selector: 'ag-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  constructor() {}

  @Input() icon: string = null;
  @Input() color: string = '#414141';
  @Input() stylePrefix: IconStyle = 'fas';
  @Input() fixedWidth: boolean = false;
  @Input() size: IconSize = '1x';
  @Input() rotation: IconRotation = null;
  @Input() spin: boolean = false;
  @Input() border: boolean = false;

  styleClass = '';

  ngOnInit(): void {
    this.styleClass += `${this.icon} `;
    this.styleClass += `${this.stylePrefix} `;
    this.styleClass += `fa-${this.size} `;
    if (this.fixedWidth) this.styleClass += ' fa-fw ';
    if (this.rotation) this.styleClass += ` fa-${this.rotation} `;
    if (this.spin) this.styleClass += ' fa-spin';
    if (this.border) this.styleClass += ' fa-border';
  }
}