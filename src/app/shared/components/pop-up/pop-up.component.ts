import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PopupModel } from '../../models/popupModel';
import { PopUpService } from '../../services/pop-up.service';

@Component({
  selector: 'etiya-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  constructor(private popUpService: PopUpService) {}

  ngOnInit(): void {
    this.showPopUp();
  }

  popUp!: PopupModel;

  showPopUp() {
    this.popUpService.isPopUp.subscribe((response) => {
      this.popUp = response;
    });
  }

  closePopUp() {
    this.popUp.isOpen = false;
    this.popUpService.stopPopUp();
  }
}
