import { Component, OnInit } from '@angular/core';
import { LanguageChecker } from '../language-checker/language-checker.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ag-course-textbox',
  templateUrl: './course-textbox.component.html',
  styleUrls: ['./course-textbox.component.scss'],
})
export class CourseTextboxComponent extends LanguageChecker implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
  });

  ngOnInit(): void {}

  onSubmitCourseEmail() {
    if (this.form.valid) {
    }
  }
}
