import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Collaboration } from './models/collaboration';
import { Publication } from './models/publication';


export interface IMenu {
  name: string;
  children?: { id: number; name: string }[];
}

const textItem = `Alessio Romano, artist. Originally from Roma, Italy. For some reasons his mother moved to jg Russia when hi was so young.
In Moscow he have got a russian name. He never mentioned his  inal ancestry until the end of carrier in marketing and advertising. Stroganov
University o inal ancestry until the end of carrier in marketing and advertising. Stroganov University o & Design /Graphic &
Alessio Romano, artist. Originally from Roma, Italy. For some reasons his mother moved to jg Russia when hi was so young. In Moscow
he have got a russian name. He never mentioned his  inal ancestry until the end of carrier in marketing and advertising. Stroganov
University o inal ancestry until the end of carrier in marketing and advertising. Stroganov University o & Design /Graphic
`;

const textStub = [textItem, textItem, textItem];

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  topMenu() {
    return [
      { id: 1, name: 'metadata' },
      { id: 2, name: 'exhibitions' },
      { id: 3, name: 'projects' },
      { id: 4, name: 'collaborations' },
      {
        id: 0,
        name: 'buy',
        link: 'buy/projects',
        children: [
          { id: 1, name: 'art' },
          { id: 2, name: 'instalation' },
          { id: 3, name: 'print' },
          { id: 4, name: 'collection 4 home' },
          { id: 5, name: 'collection 4 man' },
          { id: 6, name: 'collection 4 woman' },
          { id: 7, name: 'accessory' },
          { id: 8, name: 'souvenirs' },
        ],
      },
      { id: 5, name: 'legalterms' },
      { id: 6, name: 'contacts' },
      { id: 7, name: 'publications' },
      { id: 8, name: 'video' },
    ];
  }

  getCollaborations(): Observable<Collaboration[]> {
    return of([
      { name: 'apophenia', height: '10.3vw', text: textStub },
      { name: 'dream', height: '10.29vw', text: textStub },
      { name: 'meaning', height: '12.5vw', text: textStub },
    ]);
  }

  getPublications(): Observable<Publication[]> {
    return of([{ name: 'elle', text: textStub }]);
  }
}
