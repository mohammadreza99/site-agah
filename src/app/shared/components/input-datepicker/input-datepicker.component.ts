import {
  Component,
  OnInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import * as moment from 'moment';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ag-input-datepicker',
  templateUrl: './input-datepicker.component.html',
  styleUrls: ['./input-datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDatepickerComponent),
      multi: true,
    },
  ],
})
export class InputDatepickerComponent implements OnInit, ControlValueAccessor {
  constructor(public el: ElementRef) {}

  @Input() disabled = false;
  @Input() placeholder: string;
  @Input() readonly = false;
  @Input() icon: string;
  @Input() minDate: moment.Moment | string = undefined;
  @Input() maxDate: moment.Moment | string = undefined;
  @Input() minTime: moment.Moment | string = undefined;
  @Input() maxTime: moment.Moment | string = undefined;
  @Input() date: moment.Moment = null;
  @Output() dateChange = new EventEmitter();
  @Output() onChange = new EventEmitter();
  @Output() onOpen = new EventEmitter();
  @Output() onClose = new EventEmitter();
  @Output() onGoToCurrent = new EventEmitter();
  @Output() onLeftNav = new EventEmitter();
  @Output() onRightNav = new EventEmitter();
  @Output() onBlur = new EventEmitter();
  @Output() onFocus = new EventEmitter();

  controlOnChanged: (value?: any) => void;
  controlOnTouched: () => void;
  hasValueAccessor = false;
  innerDate: moment.Moment = null;
  config = {
    disableKeypress: true,
    closeOnSelect: true,
    openOnClick: true,
    openOnFocus: true,
    allowMultiSelect: false,
    showTwentyFourHours: true,
    showGoToCurrent: true,
    hideOnOutsideClick: true,
    locale: moment.locale('fa'),
  };
  miladiMonths = [
    'ژانویه ',
    'فوریه ',
    'مارس',
    'آوریل',
    'می',
    'ژوئن',
    'جولای',
    'آگوست',
    'سپتامبر',
    'اکتبر',
    'نوامبر',
    'دسامبر',
  ];
  months = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];
  weeks: string[] = [
    'شنبه',
    'یکشنبه',
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنج شنبه',
    'جمعه',
  ];

  ngOnInit(): void {
    if (this.readonly) {
      this.config.openOnClick = false;
      this.config.openOnFocus = false;
    }
    setTimeout(() => {
      if (this.date) {
        this.innerDate = this.date;
      }
    }, 0);
  }

  writeValue(value: any): void {
    this.hasValueAccessor = true;
    this.innerDate = value;
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

  getStrWeekDay(momentObj: moment.Moment): string {
    let strWeekDay: string;
    if (momentObj.toDate().getDay() === 6) {
      strWeekDay = this.weeks[0];
    } else {
      strWeekDay = this.weeks[momentObj.toDate().getDay() + 1];
    }
    return strWeekDay;
  }

  clearInput() {
    this.innerDate = undefined;
    this.onChange.emit(undefined);
  }

  _onChange(date) {
    let result;
    if (date) {
      result = {
        day: date.date(),
        month: date.month() + 1,
        year: date.year(),
        strWeekDay: this.getStrWeekDay(date),
        strMonth: this.months[date.month()],
        miladiDay: date._d.getDate(),
        miladiMonth: date._d.getMonth() + 1,
        miladiYear: date._d.getFullYear(),
        miladiStrMonth: this.miladiMonths[date._d.getMonth()],
        dateObj: date._d,
        momentObj: date,
      };
      if (this.hasValueAccessor) {
        this.controlOnChanged(result.dateObj);
      }
      this.dateChange.emit(result);
      this.onChange.emit(result);
    }
  }

  _onOpen() {
    this.onOpen.emit();
  }

  _onClose() {
    this.onClose.emit();
  }

  _onGoToCurrent() {
    this.onGoToCurrent.emit();
  }

  _onLeftNav() {
    this.onLeftNav.emit();
  }

  _onRightNav() {
    this.onRightNav.emit();
  }

  _onFocus() {
    this.onFocus.emit();
  }

  _onBlur() {
    this.onBlur.emit();
  }
}
