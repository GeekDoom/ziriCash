import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movement'
})
export class MovementPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
