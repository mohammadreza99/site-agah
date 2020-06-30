import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent implements OnInit {
  constructor() {}
  @Input() colored: boolean = true;
  ngOnInit(): void {}
}
