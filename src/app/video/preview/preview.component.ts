import { Component, Input } from '@angular/core';
import { Video, videoSection } from 'src/app/services/video.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent {
  @Input() section: videoSection;
  @Input() video: Video;

  getPath(id: number): string {
    return `video/${id}.png`;
  }
}
