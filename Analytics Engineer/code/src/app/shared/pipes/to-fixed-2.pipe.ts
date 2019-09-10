import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFixed2'
})
export class ToFixed2Pipe implements PipeTransform {

  transform(n: number): any {
    return n.toFixed(2);
  }

}
