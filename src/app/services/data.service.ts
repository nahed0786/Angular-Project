import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataEmitter = new EventEmitter<string>();
  // dataEmitter = new Subject<string>();

  raiseDataEmitterEvent(data: string) {
    // this.dataEmitter.next(data);     //emit

    this.dataEmitter.emit(data);
  }

  constructor() {
  }

  addtolocal(num1: string, num2: any) {
    localStorage.setItem(num1, JSON.stringify(num2))
  }

}
