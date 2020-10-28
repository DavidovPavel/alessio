import { Injectable } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

export abstract class BaseComponent {}

export const groupByFour = <T>(p: T[][], c: T, i: number): T[][] => {
  const n = Math.floor(i / 4);
  p[n] = [...(p[n] || []), c];
  return p;
};

const paramOrName = (p: ParamMap, name: string) =>
  p.keys.length ? p.keys : [name];

export const toPathFromParam = (name: string, p: ParamMap) => {
  return paramOrName(p, name)
    .reduce((a, c) => [...a, c, p.get(c)], [])
    .join('/');
};

export const toItemFromPayload = <T>(path: string) => (
  a: DocumentChangeAction<T>,
) => {
  const data = a.payload.doc.data();
  const id = +a.payload.doc.id;
  const link = `${path}/${id}`;
  return { id, link, ...data } as T;
};

export interface IStoreItem {
  readonly id: number;
  readonly title: string;
  readonly link?: string | any[];
  readonly size?: number[];
  readonly pos: number;
}

@Injectable({ providedIn: 'root' })
export class Driver {
  data: {
    index: number;
    title: string;
    name: string;
  };
  crumbs: Observable<ParamMap>;
}

export interface IProduct {
  id: number;
  position: number;
  project: number;
  category: number;
  collection?: number;
  size: number[];
  color?: number;
  title: string;
}

export interface ICollaboration {
  name: string;
  text: string[];
  expand?: boolean;
}

export interface IExhibition {
  id: number;
  text: string[];
  expand?: boolean;
  margin?: string;
}

export interface IProject {
  name: string;
  title: string;
  quote: string;
  text: string[];
  expand?: boolean;
}

export interface IPublication {
  name: string;
  text: string[];
  expand?: boolean;
}
