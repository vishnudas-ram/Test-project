import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(arr: any[], propName:string,searchParam: string): any {
    if (!arr || !arr.length) {
      return arr;
    }
    return arr.filter((val:any)=> val[propName]?.toLowerCase().includes(searchParam.toLowerCase().trim()));
  }
}
