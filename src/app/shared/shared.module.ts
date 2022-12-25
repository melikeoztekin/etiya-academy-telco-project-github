import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { NgModule } from '@angular/core';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { SharedRoutingModule } from './shared-routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginComponent } from './pages/login/login.component';
import { ElementShowComponent } from './pages/element-show/element-show.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    PopUpComponent,
    LoginComponent,
    ElementShowComponent,
    NavbarComponent,
    SidebarComponent,
    MainLayoutComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: localStorage.getItem('language') || 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    PopUpComponent,
    TranslateModule,
    ElementShowComponent,
    NavbarComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
