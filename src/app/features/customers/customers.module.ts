import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerFilterPipe } from './pipes/customer-filter.pipe';
import { SearchCustomerComponent } from './pages/search-customer/search-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SearchCustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [SearchCustomerComponent],
  providers: [CustomerFilterPipe],
})
export class CustomersModule {}
