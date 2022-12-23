import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title: string = 'Page name';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {}

  changeLanguage(code: string) {
    this.languageService.setLanguage(code);
  }
  get selectedLanguage() {
    console.log(this.languageService.selectedLanguage);
    return this.languageService.selectedLanguage;
  }
}
