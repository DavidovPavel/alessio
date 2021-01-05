import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Video, VideoSections, VideoService } from './../../services/video.service';

type keyTypeSecions = keyof typeof VideoSections;

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  current: Video;
  videos: Video[] = [];
  section: keyTypeSecions;

  constructor(private route: ActivatedRoute, private service: VideoService) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        tap((p) => (this.section = p.get('section') as keyTypeSecions)),
        switchMap((p) =>
          this.service.getAll().pipe(
            tap((c) => (this.videos = c.filter((a) => a.section === VideoSections[this.section]))),
            tap((c) => (this.current = c.find((a) => a.id === +p.get('id'))))
          )
        )
      )
      .subscribe();
  }
}
