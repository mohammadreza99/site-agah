import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  constructor() {}

  @Input() tags: string[] = [];

  ngOnInit(): void {}
}
