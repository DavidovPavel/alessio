import { Component, Input, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-crumbs',
  template: `
    <h1>
      <ng-container *ngIf="params.keys.includes('category_id') || params.keys.includes('project_id')">
        <span>Type</span> | <a routerLink="/buy/projects">Project</a> |
        <a
          [routerLink]="['/buy/projects/', params.get('project_id')]"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          >{{ projects[params.get('project_id')] }}</a
        >
      </ng-container>
      <ng-container *ngIf="params.keys.includes('color_id')">
        |
        <a
          [routerLink]="[
            '/buy/projects/',
            params.get('project_id'),
            'category',
            params.get('category_id'),
            'colors',
            params.get('color_id')
          ]"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          >{{ colors[params.get('color_id')] }}</a
        >
      </ng-container>
      <ng-container *ngIf="params.keys.includes('size_id') || params.keys.includes('collection_id')">
        |
        <a
          [routerLink]="[
            '/buy/projects/',
            params.get('project_id'),
            'category',
            params.get('category_id'),
            'colors',
            params.get('color_id'),
            'collections',
            params.get('collection_id')
          ]"
          >{{ collections[params.get('collection_id')] }}</a
        >
        |
        <ng-container *ngFor="let size of sizes; let i = index; let last = last">
          <a
            [routerLink]="[
              '/buy/projects/',
              params.get('project_id'),
              'category',
              params.get('category_id'),
              'colors',
              params.get('color_id'),
              'collections',
              params.get('collection_id'),
              i
            ]"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            >{{ size }}</a
          >
          <ng-container *ngIf="!last"> | </ng-container>
        </ng-container>
      </ng-container>
    </h1>
  `,
  styles: [
    `
      h1 {
        font-size: 1.1vw;
      }
      .active {
        color: #cc2229;
      }
    `,
  ],
})
export class CrumbsComponent implements OnInit {
  @Input() params: ParamMap;

  projects = [
    '',
    'Singularity Synchronicity Apophenia',
    'Evasive Elusive Meaning',
    'Gravitation Singularity',
    'Dream Pressure',
    'Hallucinatio',
    'Sociale',
  ];

  colors = [
    '',
    'black',
    'oro',
    'sacro',
    'grigio',
    'zaffiro',
    'ametista',
    'topazio',
    'smeraldo',
    'commedia dell’arte',
    'sole',
  ];

  collections = ['', 'Сhaos code', 'east', 'Сhaos', 'indian', 'europe', 'middle east'];

  sizes = ['180x180', '150x150', '100x100', '50x50'];

  constructor() {}

  ngOnInit(): void {}
}
