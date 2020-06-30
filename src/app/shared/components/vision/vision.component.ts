import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss'],
})
export class VisionComponent implements OnInit {
  constructor() {}

  @Input() type: 'home-page' | 'about-page' = 'home-page';

  ngOnInit(): void {}

  get forHome() {
    return this.type === 'home-page';
  }
  get forAbout() {
    return this.type === 'about-page';
  }
}
