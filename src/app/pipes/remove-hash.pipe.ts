import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeHash'
})
export class RemoveHashPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.slice(value.indexOf("#") + 1, value.length);
  }

}
