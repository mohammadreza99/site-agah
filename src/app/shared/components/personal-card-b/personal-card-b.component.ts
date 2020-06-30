import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-personal-card-b',
  templateUrl: './personal-card-b.component.html',
  styleUrls: ['./personal-card-b.component.scss'],
})
export class PersonalCardBComponent implements OnInit {
  constructor() {}
  @Input() title: string;
  @Input() subtitle: string;
  @Input() image: string;

  ngOnInit(): void {}
}
