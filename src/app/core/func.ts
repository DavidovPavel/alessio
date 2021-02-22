import { DocumentChangeAction } from '@angular/fire/firestore';
import { ParamMap } from '@angular/router';

export const groupByFour = <T>(p: T[][], c: T, i: number): T[][] => {
  const n = Math.floor(i / 4);
  p[n] = [...(p[n] || []), c];
  return p;
};

const paramOrName = (p: ParamMap, name: string) => (p.keys.length ? p.keys : [name]);

export const toPathFromParam = (name: string, p: ParamMap) => {
  return paramOrName(p, name)
    .reduce((a, c) => [...a, c, p.get(c)], [])
    .join('/');
};

export const toItemFromPayload = <T>(path: string) => (a: DocumentChangeAction<T>) => {
  const data = a.payload.doc.data();
  const id = +a.payload.doc.id;
  const link = `${path}/${id}`;
  return { id, link, ...data } as T;
};
