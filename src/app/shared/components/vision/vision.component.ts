import { Component, OnInit, Input } from '@angular/core';
import { Department, Vision } from '@shared/models';

@Component({
  selector: 'ag-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss'],
})
export class VisionComponent implements OnInit {
  constructor() {}

  @Input() departments: Department[];
  @Input() title: string;
  @Input() vision: Vision;
  @Input() backgroundImage: string = null;
  @Input() type: 'home-page' | 'about-page' = 'home-page';

  ngOnInit(): void {}

  get forHome() {
    return this.type === 'home-page';
  }

  get forAbout() {
    return this.type === 'about-page';
  }
}
