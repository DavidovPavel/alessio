import { Pipe, PipeTransform } from '@angular/core';

import { ILinkParams } from './../../core/models/ILinkParams';

@Pipe({
  name: 'link',
  pure: true,
})
export class LinkPipe implements PipeTransform {
  transform(value: ILinkParams, currentSize: number): string | string[] {
    const { project, category, color = 0, collection = 0, size, id } = value;
    return [
      '/buy/project',
      project.toString(),
      category.toString(),
      color.toString(),
      collection.toString(),
      size.includes(currentSize) ? currentSize.toString() : size[0].toString(),
      id.toString(),
    ];
  }
}
