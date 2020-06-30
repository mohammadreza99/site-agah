import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-personal-card-a',
  templateUrl: './personal-card-a.component.html',
  styleUrls: ['./personal-card-a.component.scss'],
})
export class PersonalCardAComponent implements OnInit {
  constructor() {}
  @Input() title: string;
  @Input() subtitle: string;
  @Input() image: string;
  ngOnInit(): void {}
}
