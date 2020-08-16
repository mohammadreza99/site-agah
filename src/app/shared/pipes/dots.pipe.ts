import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dots',
})
export class DotsPipe implements PipeTransform {
  transform(value: string, limit: number = 250): string {
    return value?.length > limit ? value?.substring(0, limit) + '...' : value;
  }
}
