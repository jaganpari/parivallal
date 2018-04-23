import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplier'
})
export class MultiplierPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	let mul = parseFloat(args);
    return Math.sqrt(value);
  }

}
