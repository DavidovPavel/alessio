export const store = {
  size: [
    { id: 1, pos: 1, title: '180X180' },
    { id: 2, pos: 2, title: '150X150' },
    { id: 3, pos: 3, title: '100X100' },
    { id: 4, pos: 4, title: '50X50' },
    { id: 5, pos: 5, title: '131X131' },
  ],
  color: [
    { id: 1, pos: 1, title: 'black' },
    { id: 2, pos: 2, title: 'oro' },
    { id: 3, pos: 3, title: 'sacro' },
    { id: 4, pos: 4, title: 'grigio' },
    { id: 5, pos: 5, title: 'zaffiro' },
    { id: 6, pos: 6, title: 'ametista' },
    { id: 7, pos: 7, title: 'topazio' },
    { id: 8, pos: 8, title: 'smeraldo' },
    { id: 9, pos: 9, title: 'commedia dell’arte' },
    { id: 10, pos: 10, title: 'sole' },
  ],
  category: [
    { id: 1, pos: 1, title: 'art' },
    { id: 2, pos: 2, title: 'installation' },
    { id: 3, pos: 3, title: 'print' },
    { id: 4, pos: 4, title: 'collection 4 home' },
    { id: 5, pos: 5, title: 'collection 4 man' },
    { id: 6, pos: 6, title: 'souvenirs' },
    { id: 7, pos: 7, title: 'accessory' },
    { id: 8, pos: 8, title: 'collection 4 woman' },
  ],
  project: [
    { id: 1, pos: 1, title: 'Singularity Synchronicity Apophenia' },
    { id: 2, pos: 2, title: 'Evasive Elusive Meaning' },
    { id: 3, pos: 3, title: 'Gravitation Singularity' },
    { id: 4, pos: 4, title: 'Dream Pressure' },
    { id: 5, pos: 5, title: 'Hallucinatio' },
    { id: 6, pos: 6, title: 'Sociale' },
  ],
  collection: [
    { id: 1, pos: 1, title: 'chaos' },
    { id: 2, pos: 2, title: 'chaos code' },
    { id: 3, pos: 3, title: 'east' },
    { id: 4, pos: 4, title: 'europe' },
    { id: 5, pos: 5, title: 'indian' },
    { id: 6, pos: 6, title: 'middle east' },
  ],
};

export const Catalog = [
  {
    id: 1,
    project: [
      {
        id: 1,
        category: [
          {
            id: 1,
            color: [
              { id: 1, type: 'collection', size: 1 },
              { id: 2, type: 'collection' },
              { id: 3, type: 'collection' },
              { id: 4, type: 'collection' },
              { id: 5, type: 'collection' },
              { id: 6, type: 'collection' },
            ],
          },
        ],
      },
      {
        id: 3,
        size: 5,
      },
    ],
  },
];

export const Products = [
  { id: 1, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 00' },
  { id: 2, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 000' },
  { id: 3, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 11' },
  { id: 4, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 22' },
  { id: 5, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 33' },
  { id: 6, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 44' },
  { id: 7, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 55' },
  { id: 8, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 66' },
  { id: 9, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 77' },
  { id: 10, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 88' },
  { id: 11, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 99' },
  { id: 12, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 111' },
  { id: 13, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 222' },
  { id: 14, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 333' },
  { id: 15, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 444' },
  { id: 16, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 555' },
  { id: 17, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 666' },
  { id: 18, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 777' },
  { id: 19, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 888' },
  { id: 20, project: 1, category: 1, collection: 1, color: 1, size: [1, 2, 3, 4], title: 'Сhaos 999' },

  { id: 21, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 212' },
  { id: 22, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 011' },
  { id: 23, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 818' },
  { id: 24, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 717' },
  { id: 25, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 808' },
  { id: 26, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 707' },
  { id: 27, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 616' },
  { id: 28, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 515' },
  { id: 29, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 606' },
  { id: 30, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 505' },
  { id: 31, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 414' },
  { id: 32, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 313' },
  { id: 33, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 202' },
  { id: 34, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 101' },
  { id: 35, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 121' },
  { id: 36, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 022' },
  { id: 37, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 919' },
  { id: 38, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 020' },
  { id: 39, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 909' },
  { id: 40, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 010' },
  { id: 41, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 404' },
  { id: 42, project: 1, category: 1, collection: 2, color: 1, size: [1, 2, 3, 4], title: 'Сhaos Code 303' },

  { id: 43, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Sunset' },
  { id: 44, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Sunset i' },
  { id: 45, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Sunrise' },
  { id: 46, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Sunrise i' },
  { id: 47, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Midnight' },
  { id: 48, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Midday' },
  { id: 49, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'In' },
  { id: 50, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Yan' },
  { id: 51, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Yan/In' },
  { id: 52, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'In/Yan' },
  { id: 53, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Dao' },
  { id: 54, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Dao I' },
  { id: 55, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Enso' },
  { id: 56, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Enso Latest Sky' },
  { id: 57, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Zhen' },
  { id: 58, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Zhen Latest Sky' },
  { id: 59, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Xun' },
  { id: 60, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Xun Latest Sky' },
  { id: 61, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Qian' },
  { id: 62, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Qian Latest Sky' },
  { id: 63, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Li' },
  { id: 64, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Li Latest Sky' },
  { id: 65, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Kun' },
  { id: 66, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Kun Latest Sky' },
  { id: 67, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Kan' },
  { id: 68, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Kan Latest Sky' },
  { id: 69, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Gen' },
  { id: 70, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Gen Latest Sky' },
  { id: 71, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Dui' },
  { id: 72, project: 1, category: 1, collection: 3, color: 1, size: [1, 2, 3, 4], title: 'Dui Latest Sky' },

  { id: 73, project: 1, category: 1, collection: 4, color: 1, size: [1, 2, 3, 4], title: 'Aaron Sphere' },
  { id: 74, project: 1, category: 1, collection: 4, color: 1, size: [1, 2, 3, 4], title: 'Magic Sphere' },
  { id: 75, project: 1, category: 1, collection: 4, color: 1, size: [1, 2, 3, 4], title: 'Patra/Andrew' },
  { id: 76, project: 1, category: 1, collection: 4, color: 1, size: [1, 2, 3, 4], title: 'Crux Decussta' },
  { id: 77, project: 1, category: 1, collection: 4, color: 1, size: [1, 2, 3, 4], title: 'Golgota/Dismas' },
  { id: 78, project: 1, category: 1, collection: 4, color: 1, size: [1, 2, 3, 4], title: 'Golgota/Gestas' },
  { id: 79, project: 1, category: 1, collection: 4, color: 1, size: [1, 2, 3, 4], title: 'Golgota/Jesus' },
  { id: 80, project: 1, category: 1, collection: 4, color: 1, size: [1, 2, 3, 4], title: 'Golgota/Judah' },
  { id: 81, project: 1, category: 1, collection: 4, color: 1, size: [1, 2, 3, 4], title: 'John the Divine' },
  { id: 82, project: 1, category: 1, collection: 4, color: 1, size: [1, 2, 3, 4], title: 'Roma/Peter' },
  { id: 83, project: 1, category: 1, collection: 4, color: 1, size: [1, 2, 3, 4], title: 'Kaaba Hadj' },
  { id: 84, project: 1, category: 1, collection: 4, color: 1, size: [1, 2, 3, 4], title: 'Kaaba Mecca' },
  { id: 85, project: 1, category: 1, collection: 4, color: 1, size: [1, 2, 3, 4], title: 'Kaaba' },
  { id: 86, project: 1, category: 1, collection: 4, color: 1, size: [1, 2, 3, 4], title: 'Mecca' },
  { id: 87, project: 1, category: 1, collection: 4, color: 1, size: [1, 2, 3, 4], title: 'Ahl al-Bayt' },
  { id: 88, project: 1, category: 1, collection: 4, color: 1, size: [1, 2, 3, 4], title: 'Masjid al-Haram' },

  { id: 89, project: 1, category: 1, collection: 5, color: 1, size: [1, 2, 3, 4], title: 'Om 00' },
  { id: 90, project: 1, category: 1, collection: 5, color: 1, size: [1, 2, 3, 4], title: 'Om 11' },
  { id: 91, project: 1, category: 1, collection: 5, color: 1, size: [1, 2, 3, 4], title: 'Om 22' },
  { id: 92, project: 1, category: 1, collection: 5, color: 1, size: [1, 2, 3, 4], title: 'Om 33' },
  { id: 93, project: 1, category: 1, collection: 5, color: 1, size: [1, 2, 3, 4], title: 'Veda Dark' },
  { id: 94, project: 1, category: 1, collection: 5, color: 1, size: [1, 2, 3, 4], title: 'Veda Tantric' },
  { id: 95, project: 1, category: 1, collection: 5, color: 1, size: [1, 2, 3, 4], title: 'Veda Tranc' },
  { id: 96, project: 1, category: 1, collection: 5, color: 1, size: [1, 2, 3, 4], title: 'Veda' },

  { id: 97, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'Hierarchy 00' },
  { id: 98, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'Hierarchy 11' },
  { id: 99, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'Hierarchy 22' },
  { id: 100, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'Hierarchy 33' },
  { id: 101, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'Hierarchy 44' },
  { id: 102, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'Hierarchy 55' },
  { id: 103, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'New Order 00' },
  { id: 104, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'New Order 11' },
  { id: 105, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'New Order 22' },
  { id: 106, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'New Order 33' },
  { id: 107, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'New Order 44' },
  { id: 108, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'New Order 55' },
  { id: 109, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'New Order 66' },
  { id: 110, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'New Order 77' },
  { id: 111, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'New Order 88' },
  { id: 112, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'Order 00' },
  { id: 113, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'Order 01' },
  { id: 114, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'Order 02' },
  { id: 115, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'Order 03' },
  { id: 116, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'Order 04' },
  { id: 117, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'Order 05' },
  { id: 118, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'Order 06' },
  { id: 119, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'Order 07' },
  { id: 120, project: 1, category: 1, collection: 6, color: 1, size: [1, 2, 3, 4], title: 'Order 08' },

  { id: 121, project: 1, category: 3, size: [5], title: 'mindset' },
  { id: 122, project: 1, category: 3, size: [5], title: 'time' },
  { id: 123, project: 1, category: 3, size: [5], title: 'hidden name' },
  { id: 124, project: 1, category: 3, size: [5], title: 'free light' },
  { id: 125, project: 1, category: 3, size: [5], title: 'free darck' },
  { id: 126, project: 1, category: 3, size: [5], title: 'free mind' },
  { id: 127, project: 1, category: 3, size: [5], title: 'free time' },
  { id: 128, project: 1, category: 3, size: [5], title: 'your mind' },
  { id: 129, project: 1, category: 3, size: [5], title: 'time dos exist' },
  { id: 130, project: 1, category: 3, size: [5], title: 'time dos not  exist' },
];
