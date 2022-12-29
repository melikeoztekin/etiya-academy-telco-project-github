import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { SearchCustomerComponent } from './pages/search-customer/search-customer.component';

const routes: Routes = [
  {
    path: '',
    component: SearchCustomerComponent,
  },
  {
    path: 'search-customer',
    component: SearchCustomerComponent,
  },
  {
    path: 'customer',
    children: [
      // { path: '', pathMatch: 'full', component: DemographicInfoComponent },
      // { path: 'demographic_info', component: DemographicInfoComponent },
      // { path: ':id/customer_info', component: CustomerInfoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
