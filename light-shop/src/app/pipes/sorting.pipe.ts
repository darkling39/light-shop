import { Pipe, PipeTransform } from '@angular/core';
import { INews } from '../components/schemas/news';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(news: INews[], search: string): INews[] {
    return news.filter(e => {
     return e.title.toLowerCase().includes(search.toLowerCase()) || 
            e.snippet.toLowerCase().includes(search.toLowerCase())
    })
  }

}
