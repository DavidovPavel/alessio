import { Pipe, PipeTransform } from '@angular/core';
import { IStoreItem } from '../core/types';

@Pipe({
  name: 'title',
  pure: true
})
export class TitlePipe implements PipeTransform {

  transform(value: IStoreItem[], id: number): string {
    return value.find((a) => a.id === id)?.title;
  }

}
