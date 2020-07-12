import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ag-job-request-form',
  templateUrl: './job-request-form.component.html',
  styleUrls: ['./job-request-form.component.scss'],
})
export class JobRequestFormComponent implements OnInit {
  constructor() {}

  @Output() onSubmit = new EventEmitter();

  form = new FormGroup({
    firstName: new FormControl(null, []),
    lastName: new FormControl(null, []),
    birthday: new FormControl(null, []),
    gender: new FormControl(null, []),
    email: new FormControl(null, []),
    phoneNumber: new FormControl(null, []),
    address: new FormControl(null, []),
    image: new FormControl(null, []),
  });

  ngOnInit(): void {}

  _onSubmit() {
    this.onSubmit.emit(this.form.value);
  }
}
