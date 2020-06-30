import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  constructor() {}
  @Input() partners: any[]=[];
  ngOnInit(): void {}
}
