import {
  Component,
  OnInit,
  Input,
  Self,
  Optional,
  Output,
  EventEmitter,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

import { Validations } from '../../models/validation.model';

@Component({
  selector: 'ag-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit, ControlValueAccessor {
  constructor(@Optional() @Self() public ngControl?: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  @Input() placeholder: string;
  @Input() errors: Validations[] = [];
  @Input() label: string;
  @Input() icon: string;
  @Input() type = 'text';
  @Input() dir: 'ltr' | 'rtl' = 'rtl';
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  @Input() maxlength: number;
  @Output() onInput = new EventEmitter<any>();
  @Output() onBlur = new EventEmitter();
  @Output() onFocus = new EventEmitter();

  controlOnChange: (value?: any) => void;
  controlOnTouched: () => void;
  value: any = '';

  ngOnInit(): void {}

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.controlOnChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.controlOnTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  controlIsTouchedOrDirty(): boolean {
    const control = this.ngControl?.control;
    return (
      (control?.invalid && control?.touched) ||
      (control?.invalid && control?.dirty)
    );
  }

  hasError(error: Validations): boolean {
    return (
      this.controlIsTouchedOrDirty() &&
      this.ngControl?.hasError(Object.keys(error).toString())
    );
  }

  getErrorMessage(error: Validations) {
    return Object.values(error);
  }

  _onInput(event) {
    this.controlOnChange(event.target.value);
    this.onInput.emit(event.target.value);
  }

  _onBlur() {
    this.controlOnTouched();
    this.onBlur.emit();
  }

  _onFocus() {}

  get isRtl() {
    return this.dir === 'rtl';
  }
  get isLtr() {
    return this.dir === 'ltr';
  }
}
