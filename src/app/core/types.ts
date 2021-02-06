import { Injectable } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

export type unitsType = 'px' | 'em' | 'rem' | '%' | 'vw' | 'vh';
export interface ContentInfo {
  id: number;
  content: string;
  typeContent: 'text' | 'image';
  className: string;
}

export interface ITitleId {
  title: string;
  id: number;
}

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

@Injectable({ providedIn: 'root' })
export class Driver {
  data: {
    index: number;
    title: string;
    name: string;
  };
  crumbs: Observable<ParamMap>;
}

export interface Collaboration {
  name: string;
  text: string[];
  expand?: boolean;
  height: string;
}

export interface Exhibition {
  id: number;
  title: string;
  text: string[];
  expand?: boolean;
  margin?: string;
}

export interface Project {
  id: number;
  title: string;
  text: string[];
  expand?: boolean;
  height: string;
}

export interface IPublication {
  name: string;
  text: string[];
  expand?: boolean;
}
