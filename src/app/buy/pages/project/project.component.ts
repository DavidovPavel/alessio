import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ListItem } from '@app/buy/list-item';
import { PointInfo } from '@app/buy/point-info';
import { FireService } from '@app/services/fire.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  pointInfo: PointInfo = {
    name: 'category',
    showTitle: true,
  };

  group$: Observable<ListItem[][]>;

  constructor(private fire: FireService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.group$ = this.route.paramMap.pipe(switchMap((p) => this.fire.getGroup<ListItem>(`projects/${p.get('id')}/category`, 'pos')));
  }
}
