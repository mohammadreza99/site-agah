import { Component, OnInit, Input } from '@angular/core';
import { Counselor } from '@app/shared/models/counselor.model';

@Component({
  selector: 'ag-counselor-item',
  templateUrl: './counselor-item.component.html',
  styleUrls: ['./counselor-item.component.scss'],
})
export class CounselorItemComponent implements OnInit {
  @Input() counselor: Counselor;

  get counselorFullName() {
    return `${this.counselor.first_name} ${this.counselor.last_name}`;
  }

  ngOnInit(): void {}
}
