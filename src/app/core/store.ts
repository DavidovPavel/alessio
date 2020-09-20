const dummy = (img: string = '') => ({ id: null, title: '', img });

export interface IStoreProject {
  id: number;
  title: string;
  inActive?: boolean;
  img?: string;
}

export const StoreProjects: IStoreProject[][] = [
  [
    { id: 1, title: 'Singularity Synchronicity Apophenia', inActive: true },
    { id: 2, title: 'Evasive Elusive Meaning' },
    { id: 3, title: 'Gravitation Singularity' },
    { id: 4, title: 'Dream Pressure' },
  ],
  [dummy('x'), { id: 5, title: 'Hallucinatio' }, { id: 6, title: 'Sociale' }, dummy()],
];

export const StoreCategory = [
  [
    { id: 1, title: 'art', inActive: true },
    { id: 2, title: 'installation' },
    { id: 3, title: 'print' },
    { id: 4, title: 'collection 4 home' },
  ],
  [
    { id: 5, title: 'collection 4 man' },
    { id: 6, title: 'souvenirs' },
    { id: 7, title: 'accessory' },
    { id: 8, title: 'collection 4 woman' },
  ],
];

export const StoreColor = [
  [
    { id: 1, title: 'BLACK', inActive: true },
    { id: 2, title: 'ORO' },
    { id: 3, title: 'SACRO' },
    { id: 4, title: 'GRIGIO' },
  ],
  [
    { id: 5, title: 'ZAFFIRO' },
    { id: 6, title: 'AMETISTA' },
    { id: 7, title: 'TOPAZIO' },
    { id: 8, title: 'SMERALDO' },
  ],
  [
    { id: 9, title: 'COMMEDIA DELL’ARTE' },
    { id: 10, title: 'SOLE' },
  ],
];

export const StoreCollections = [
  [
    { id: 1, title: 'chaos', inActive: true },
    { id: 2, title: 'chaos code' },
    { id: 3, title: 'east' },
    { id: 4, title: 'indian' },
  ],
  [dummy(), { id: 5, title: 'europe' }, { id: 6, title: 'middle east' }, dummy()],
];
