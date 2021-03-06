import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Video, VideoSections, VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  projects: Observable<Video[]>;
  interviews: Observable<Video[]>;
  principles: Observable<Video[]>;

  constructor(private service: VideoService) {}

  ngOnInit(): void {
    this.projects = this.service.getProjects();
    this.interviews = this.service.getInterviews();
    this.principles = this.service.getPrinciples();
  }

  getSection(i: number) {
    return Object.keys(VideoSections)[i];
  }
}
