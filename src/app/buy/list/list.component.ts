import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { groupByFour, IStoreItem } from 'src/app/core/types';
import { Driver } from 'src/app/core/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  groups$: Observable<any>;
  hideTitle = false;
  exclude = ['project'];
  storeName: string;

  constructor(private params: Driver, afs: AngularFirestore) {
    const { name } = this.params.data;
    this.storeName = name;

    const crumbs$ =
      name === 'project'
        ? of('catalog')
        : this.params.crumbs.pipe(
            map((a) =>
              a.keys
                .reduce((p, c) => [...p, ...[a.get(c), c]], ['catalog'])
                .join('/'),
            ),
          );

    const all$ = afs
      .collection<IStoreItem>(name, (ref) => ref.orderBy('pos'))
      .valueChanges();

    const incatalog$ = crumbs$.pipe(
      tap((p) => console.log(p)),
      switchMap((p) => afs.collection<IStoreItem>(p).valueChanges()),
    );

    this.groups$ = combineLatest([all$, incatalog$]).pipe(
      map((result: [IStoreItem[], IStoreItem[]]) =>
        result[0]
          .map((a) => {
            const c = result[1].find((b) => b.id === a.id);
            const to = c?.size ? `/${c.size}` : '';
            return {
              ...a,
              isActive: !!c,
              link: `${a.id}${to}`,
            };
          })
          .reduce(groupByFour, [])
          .map((a) => (a.length === 2 ? [{}, ...a, {}] : a)),
      ),
      tap((x) => console.log(x)),
    );
  }

  ngOnInit(): void {
    const { name } = this.params.data;
    this.hideTitle = this.exclude.includes(name);
  }
}
