import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ag-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent implements OnInit {
  constructor() {}

  @Input() replyComment: any;
  @Output() submit = new EventEmitter();
  @Output() cancelReply = new EventEmitter();

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      comment: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    this.submit.emit(this.form.value);
    this.form.controls['name'].setValue('');
    this.form.controls['email'].setValue('');
    this.form.controls['comment'].setValue('');
    this.form.reset();
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }
}
