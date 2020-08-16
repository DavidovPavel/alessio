import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  get bgMain() {
    return '#1c1c1c';
  }

  constructor() { }
}
