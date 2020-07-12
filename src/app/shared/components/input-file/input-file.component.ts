import { Component, OnInit, HostListener, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ag-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFileComponent),
      multi: true,
    },
  ],
})
export class InputFileComponent implements OnInit, ControlValueAccessor {
  constructor(private host: ElementRef<HTMLInputElement>) {}

  onChange: (v?: any) => any;
  file: File | null = null;
  hasValueAccessor = false;

  ngOnInit(): void {}

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.file = file;
    if (this.hasValueAccessor) {
      this.onChange(file);
    }
  }

  writeValue(value: null) {
    this.hasValueAccessor = true;
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange(fn: any) {
    this.hasValueAccessor = true;
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.hasValueAccessor = true;
  }
}
