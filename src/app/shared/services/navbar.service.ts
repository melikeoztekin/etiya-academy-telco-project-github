import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor() {}

  title: BehaviorSubject<string> = new BehaviorSubject<string>('');
  setTitle(value: string) {
    this.title.next(value);
  }
}
