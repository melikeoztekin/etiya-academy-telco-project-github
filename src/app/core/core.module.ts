import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';
import { IfNotDirective } from './directives/if-not.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    OverlayLoadingComponent,
    IfNotDirective,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
  ],
  exports: [IfNotDirective],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class CoreModule {}
