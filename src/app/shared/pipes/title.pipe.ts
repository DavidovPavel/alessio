import { Pipe, PipeTransform } from '@angular/core';

import { IStoreItem } from '../../core/models/store-item';

@Pipe({
  name: 'title',
})
export class TitlePipe implements PipeTransform {
  transform(value: IStoreItem[], id: number): string {
    return value.find((a) => a.id === id)?.title;
  }
}
