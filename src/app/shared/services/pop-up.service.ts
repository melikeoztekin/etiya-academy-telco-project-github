import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PopupModel } from '../models/popupModel';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  isPopUp: BehaviorSubject<PopupModel> = new BehaviorSubject<PopupModel>({isOpen:false, title:'',description:''
  ,icon:'',leftButtonText:'Cl',rightButtonText:''});

  constructor() { }

  startPopUp(popUp: PopupModel) {
// this.isPopUp.next({isOpen:true,title:popUp.title , description:popUp.description,icon:popUp.icon,leftButtonText:'',rightButtonText:''})
popUp.isOpen = true;
this.isPopUp.next(popUp)

console.log(this.isPopUp.value.isOpen);

}

  stopPopUp(){
    this.isPopUp.next({...this.isPopUp.value,isOpen:false})
  }
}

// {isOpen:popUp.isOpen, title:popUp.title , description:popUp.description,
//   icon:popUp.icon,leftButtonText:popUp.leftButtonText,rightButtonText:popUp.leftButtonText}