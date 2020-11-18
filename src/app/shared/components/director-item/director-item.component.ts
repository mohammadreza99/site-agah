import { Component, OnInit, Input } from '@angular/core';
import { Director } from '@shared/models';

@Component({
  selector: 'ag-director-item',
  templateUrl: './director-item.component.html',
  styleUrls: ['./director-item.component.scss'],
})
export class DirectorItemComponent implements OnInit {
  @Input() director: Director;

  get directorFullName() {
    return `${this.director.first_name} ${this.director.last_name}`;
  }

  ngOnInit(): void {}
}
