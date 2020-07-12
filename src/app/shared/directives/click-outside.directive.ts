import {
  Directive,
  HostListener,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  constructor(private elementRef: ElementRef) {}

  @Output() clickOutside = new EventEmitter();

  @HostListener('document:click', ['$event.path'])
  public onGlobalClick(targetElementPath: Array<any>) {
    const elementRefInPath = targetElementPath.find(
      (e) => e === this.elementRef.nativeElement
    );
    if (!elementRefInPath) {
      this.clickOutside.emit();
    }
  }
}
