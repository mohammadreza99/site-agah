import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Optional,
  Self,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'ag-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
})
export class InputSelectComponent implements OnInit {

  @Input() icon = 'fal fa-chevron-down';
  @Input() list: string[];
  @Input() iconPos: 'start' | 'end' = 'end';
  @Output() listItemClick = new EventEmitter();

  selected = 'Choose';
  isDropdownOpen = false;

  ngOnInit(): void {}

  onClickOutside() {
    this.isDropdownOpen = false;
  }

  onDropdownItemClick(item: string) {
    this.selected = item;
    this.listItemClick.emit(item);
  }

  toggleDropDown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
