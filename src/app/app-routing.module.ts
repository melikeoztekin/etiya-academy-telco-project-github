import { ElementShowComponent } from './shared/pages/element-show/element-show.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/pages/login/login.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { SearchCustomerComponent } from './features/customers/pages/search-customer/search-customer.component';

const routes: Routes = [
  { path: '', component: SearchCustomerComponent },
  {
    path: 'search-customer',
    component: SearchCustomerComponent,
  },
  { path: 'element-show', component: ElementShowComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '404notfound',
    component: NotFoundComponent,
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
