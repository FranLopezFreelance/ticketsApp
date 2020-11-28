import { EventEmitter, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  changeUser: EventEmitter<number> = new EventEmitter();

  constructor() { }
}
