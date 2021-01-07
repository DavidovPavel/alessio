import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Video, VideoService } from 'src/app/services/video.service';


@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss'],
})
export class MiddleComponent implements OnInit {
  video$: Observable<Video>;

  constructor(private route: ActivatedRoute, private service: VideoService) {}

  ngOnInit(): void {
    this.video$ = this.route.paramMap.pipe(this.service.getOneByParam());
  }
}
