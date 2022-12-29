import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PopupModel } from 'src/app/shared/models/popupModel';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { PopUpService } from 'src/app/shared/services/pop-up.service';
import { Customer } from '../../models/customer';
import { Filter } from '../../models/filter';
import { CustomerFilterPipe } from '../../pipes/customer-filter.pipe';
import { CustomerService } from '../../services/customer.service';

@Component({
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.scss'],
})
export class SearchCustomerComponent implements OnInit {
  title: string = 'search_customer';
  searchFormGroup: FormGroup; // !
  customers!: Customer[];
  allCustomers!: Customer[];
  filterApplied: boolean = false;

  constructor(
    private customerService: CustomerService,
    private customerFilterPipe: CustomerFilterPipe,
    private popUpService: PopUpService,
    private navbarService: NavbarService
  ) {}

  ngOnInit(): void {
    this.getListCustomers();
    this.navbarService.setTitle(this.title);
  }

  getListCustomers() {
    this.customerService.getList().subscribe((response) => {
      this.customers = response;
      this.allCustomers = response;
      console.log(response);
    });
  }

  searchFilter() {
    this.customers = this.customerFilterPipe.transform(
      this.allCustomers,
      this.customerFilter.nationalityId,
      this.customerFilter.id,
      this.customerFilter.firstName,
      this.customerFilter.lastName,
      this.customerFilter.gsmNumber,
      this.customerFilter.orderNumber,
      this.customerFilter.accountNumber
    );
    if (this.customers.length <= 0) {
      this.runPopUp();
    } else {
      this.filterApplied = true;
    }
  }

  clearFilter() {
    this.filterApplied = false;
    this.customerFilter = {
      id: null,
      nationalityId: null,
      firstName: '',
      lastName: '',
      gsmNumber: '',
      orderNumber: null,
      accountNumber: '',
    };
  }

  customerFilter: Filter = {
    id: null,
    nationalityId: null,
    firstName: '',
    lastName: '',
    gsmNumber: '',
    orderNumber: null,
    accountNumber: '',
  };

  popUpModel: PopupModel = {
    isOpen: true,
    title: 'no_customer!',
    description: 'no_customer_desc',
    icon: 'fa-sharp fa-solid fa-circle-exclamation',
    leftButtonText: 'cancel',
    rightButtonText: 'create_customer',
  };
  show: boolean = false;

  runPopUp() {
    this.popUpService.startPopUp(this.popUpModel);
    this.showPopUp();
  }

  showPopUp() {
    this.popUpService.isPopUp.subscribe((response) => {
      this.show = response.isOpen;
      console.log(response);
    });
  }
}
