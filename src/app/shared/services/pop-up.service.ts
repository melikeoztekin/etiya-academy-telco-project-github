import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PopupModel } from '../models/popupModel';

@Injectable({
  providedIn: 'root',
})
export class PopUpService {
  isPopUp: BehaviorSubject<PopupModel> = new BehaviorSubject<PopupModel>({
    isOpen: false,
    title: '',
    description: '',
    icon: '',
    leftButtonText: 'Cl',
    rightButtonText: '',
  });

  constructor() {}

  startPopUp(popUp: PopupModel) {
    this.isPopUp.next(popUp);
  }

  stopPopUp() {
    this.isPopUp.next({ ...this.isPopUp.value, isOpen: false });
  }
}
