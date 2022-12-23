import { Component } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language.service';
import { PopupModel } from '../../models/popupModel';
import { PopUpService } from '../../services/pop-up.service';

@Component({
  selector: 'app-element-show',
  templateUrl: './element-show.component.html',
  styleUrls: ['./element-show.component.scss'],
})
export class ElementShowComponent {
  constructor(
    private popUpService: PopUpService,
    private languageService: LanguageService
  ) {}

  popUpModel: PopupModel = {
    isOpen: true,
    title: 'Warning!',
    description: 'Are you sure to delete this customer ?',
    icon: 'fa-sharp fa-solid fa-circle-exclamation',
    leftButtonText: 'Cancel',
    rightButtonText: 'Delete',
  };
  show: boolean = false;

  runPopUp() {
    this.popUpService.startPopUp(this.popUpModel);
    this.showPopUp();
  }

  changeLanguage(code: string) {
    this.languageService.setLanguage(code);
  }

  showPopUp() {
    this.popUpService.isPopUp.subscribe((response) => {
      this.show = response.isOpen;
      console.log(response);
    });
  }
}
