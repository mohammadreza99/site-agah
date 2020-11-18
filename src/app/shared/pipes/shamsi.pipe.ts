import { Pipe, PipeTransform } from '@angular/core';
import { LanguageChecker } from '../components/language-checker/language-checker.component';

@Pipe({
  name: 'shamsi',
})
export class ShamsiPipe extends LanguageChecker implements PipeTransform {
  constructor() {
    super();
  }

  transform(value: any): unknown {
    return this.fa ? new Date(value).toLocaleDateString('fa-Ir') : value;
  }
}
