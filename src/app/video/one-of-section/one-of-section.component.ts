import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Video, VideoService } from './../../services/video.service';

@Component({
  selector: 'app-one-of-section',
  templateUrl: './one-of-section.component.html',
  styleUrls: ['./one-of-section.component.scss'],
})
export class OneOfSectionComponent implements OnInit {
  current: Video;
  videos: Video[] = [];

  constructor(private route: ActivatedRoute, private service: VideoService) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((p) =>
          this.service.getAll().pipe(
            tap((c) => (this.current = c.find((a) => a.id === +p.get('id')))),
            tap((c) => (this.videos = c.filter((a) => a.section === this.current.section)))
          )
        )
      )
      .subscribe();
  }
}
