import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
  console.log(items); //holds array
  console.log(searchText); // holds search text
    return items.filter(function(item) {
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
  }
  

}
