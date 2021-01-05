import { Component, Input } from '@angular/core';
import { Video, VideoSections } from 'src/app/services/video.service';

@Component({
  selector: 'app-preview',
  template: `<div><img [src]="video.id | path | getDownloadURL" alt="" /></div>
    <div>
      <span>{{ section }}</span
      >{{ section ? '&nbsp;|&nbsp;' : '' }}<span>{{ video.title }}</span
      >{{ video.author ? '&nbsp;|&nbsp;' : '' }}<span>{{ video.author }}</span>
    </div>`,
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent {
  @Input() section: VideoSections;
  @Input() video: Video;
}
