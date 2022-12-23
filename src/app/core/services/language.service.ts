import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(
    private translateService: TranslateService,
    private localStorage: LocalStorageService
  ) {}

  setLanguage(code: string) {
    this.translateService.use(code);
    this.localStorage.add('language', code);
  }
  get selectedLanguage(): string {
    console.log(this.localStorage.get('language'));
    return (
      this.localStorage.get('language') || this.translateService.defaultLang
    );
  }
}
