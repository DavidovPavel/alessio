// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const FIRESTORE_EMULATOR_HOST = 'localhost:8080';

export const environment = {
  production: false,
  useEmulators: true,
  firebase: {
    apiKey: 'AIzaSyD8gPzXSujJYu_NKhsLHyZ2vBVLjjd94a0',
    authDomain: 'alessio-376fd.firebaseapp.com',
    databaseURL: 'https://alessio-376fd.firebaseio.com',
    projectId: 'alessio-376fd',
    storageBucket: 'alessio-376fd.appspot.com',
    messagingSenderId: '769892412834',
    appId: '1:769892412834:web:bb0b5f0dc005283a4c16fb',
    measurementId: 'G-LMJMV7SZMG',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
