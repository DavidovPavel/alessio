import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'path'
})
export class PathPipe implements PipeTransform {

  transform(id: number, name: string): string {
    return `${name}/${id}.png`;
  }

}
