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

import { Validations } from '@shared/models/validation.model';

@Component({
  selector: 'ag-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit, ControlValueAccessor {
  constructor(@Self() @Optional() private ngControl?: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  @Input() placeholder: string = null;
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

  controlOnChanged: (value?: any) => void;
  controlOnTouched: () => void;
  value: any = '';
  hasValueAccessor = false;

  ngOnInit(): void {}

  writeValue(value: any): void {
    this.hasValueAccessor = true;
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.hasValueAccessor = true;
    this.controlOnChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.hasValueAccessor = true;
    this.controlOnTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  _onInput(event) {
    if (this.hasValueAccessor) {
      this.controlOnChanged(event.target.value);
    }
    this.onInput.emit(event.target.value);
  }

  _onBlur() {
    if (this.hasValueAccessor) {
      this.controlOnTouched();
    }
    this.onBlur.emit();
  }

  _onFocus() {
    this.onFocus.emit();
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

  get isRtl() {
    return this.dir === 'rtl';
  }

  get isLtr() {
    return this.dir === 'ltr';
  }
}
