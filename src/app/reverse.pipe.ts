import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}

@Pipe({
  name: 'altCap',
  standalone: true
})
export class AltCapPipe implements PipeTransform {
  transform(value: string): string {
    const splstr = value.split('');
    for (let i = 0; i < splstr.length; i += 2) {
      splstr[i] = splstr[i].toUpperCase();
    }
    return splstr.join('');
  }
}