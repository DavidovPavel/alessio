import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ICollaboration, IProject, IPublication } from './types';

const textStub = [
  `Alessio Romano, artist. Originally from Roma, Italy. For some reasons his mother moved to jg Russia when hi was so young. In Moscow
he have got a russian name. He never mentioned his  inal ancestry until the end of carrier in marketing and advertising. Stroganov
University o inal ancestry until the end of carrier in marketing and advertising. Stroganov University o & Design /Graphic &
Alessio Romano, artist. Originally from Roma, Italy. For some reasons his mother moved to jg Russia when hi was so young. In Moscow
he have got a russian name. He never mentioned his  inal ancestry until the end of carrier in marketing and advertising. Stroganov
University o inal ancestry until the end of carrier in marketing and advertising. Stroganov University o & Design /Graphic
`,
  `
Alessio Romano, artist. Originally from Roma, Italy. For some reasons his mother moved to jg Russia when hi was so young. In Moscow
he have got a russian name. He never mentioned his  inal ancestry until the end of carrier in marketing and advertising. Stroganov
University o inal ancestry until the end of carrier in marketing and advertising. Stroganov University o & Design /Graphic &
Alessio Romano, artist. Originally from Roma, Italy. For some reasons his mother moved to jg Russia when hi was so young. In Moscow
he have got a russian name. He never mentioned his  inal ancestry until the end of carrier in marketing and advertising. Stroganov
University o inal ancestry until the end of carrier in marketing and advertising. Stroganov University o & Design /Graphic
`,
  `
Alessio Romano, artist. Originally from Roma, Italy. For some reasons his mother moved to jg Russia when hi was so young. In Moscow
he have got a russian name. He never mentioned his  inal ancestry until the end of carrier in marketing and advertising. Stroganov
University o inal ancestry until the end of carrier in marketing and advertising. Stroganov University o & Design /Graphic &
Alessio Romano, artist. Originally from Roma, Italy. For some reasons his mother moved to jg Russia when hi was so young. In Moscow
he have got a russian name. He never mentioned his  inal ancestry until the end of carrier in marketing and advertising. Stroganov
University o inal ancestry until the end of carrier in marketing and advertising. Stroganov University o & Design /Graphic
`,
];

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}
  getCollaborations(): Observable<ICollaboration[]> {
    return of([
      { name: 'dream', pars: textStub },
      { name: 'meaning', pars: textStub },
    ]);
  }

  getExhibitions() {
    return of([
      { name: 'apophenia', text: textStub },
      { name: 'evasivemeaning', text: textStub },
      { name: 'manipolazione', text: textStub },
      { name: 'gravity', text: textStub },
      { name: 'dream', text: textStub },
      { name: 'hallucinatio', text: textStub },
    ]);
  }

  getProjects(): Observable<IProject[]> {
    return of([
      { name: 'apophenia', text: textStub },
      { name: 'dream', text: textStub },
      { name: 'meaning', text: textStub },
      { name: 'sociale', text: textStub },
      { name: 'gravitation', text: textStub },
      { name: 'hallucinatio', text: textStub },
    ]);
  }

  getPublications(): Observable<IPublication[]> {
    return of([{ name: 'elle', text: textStub }]);
  }
}
