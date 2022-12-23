import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PopupModel } from '../../models/popupModel';
import { PopUpService } from '../../services/pop-up.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor(private popUpService:PopUpService) {}
  
  ngOnInit(): void {
    this.showPopUp()
  }
  
popUp!:PopupModel;   
// show:boolean = false;

// @Output() onAddToCartClick = new EventEmitter<PopupModel>();
// addToCartClick() {
//  this.onAddToCartClick.emit(this.popUp1)
  
// }

showPopUp() {
  this.popUpService.isPopUp.subscribe((response)=> {
 this.popUp = response;
 
//  isOpen = this.popUp1
 console.log(response);
 
  })
  }
  closePopUp() {
    this.popUp.isOpen = false;
    this.popUpService.stopPopUp();
  }
}
