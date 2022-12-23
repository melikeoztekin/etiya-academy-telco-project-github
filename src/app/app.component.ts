import { Component, OnInit } from '@angular/core';

import { LanguageService } from './core/services/language.service';
import { PopUpService } from './shared/services/pop-up.service';
import { PopupModel } from './shared/models/popupModel';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'etiya-5-telco-frontend';
}
