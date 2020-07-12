import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let nextUniqueId = 0;
@Component({
  selector: 'ag-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioComponent),
      multi: true,
    },
  ],
})
export class InputRadioComponent implements ControlValueAccessor {
  constructor() {}

  @Input() label: string;
  @Input() items: Array<{
    name: string;
    value: string;
  }>;

  hasValueAccessor = false;
  name = `group-${nextUniqueId++}`;
  innerValue: string | number | boolean;

  get value(): string | number | boolean {
    return this.innerValue;
  }

  set value(v: string | number | boolean) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.change(v);
    }
  }

  onChange: (v?: any) => any;
  onTouched: (v?: any) => any;

  writeValue(value: string | number | boolean) {
    this.hasValueAccessor = true;
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.hasValueAccessor = true;
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.hasValueAccessor = true;
    this.onTouched = fn;
  }

  change(value: string | number | boolean) {
    this.innerValue = value;
    if (this.hasValueAccessor) {
      this.onChange(value);
      this.onTouched(value);
    }
  }
}
