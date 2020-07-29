import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();
   submitted = false;

    constructor(private customerService: CustomerService,
      private router: Router) { }

    ngOnInit() {
    }

    newEmployee(): void {
      this.submitted = false;
      this.customer = new Customer();
    }

    save() {
      if (this.customer.phone != null && this.customer.phone != undefined)
        this.customer.phone = this.customer.phone.toString().split(',').map(function(el){ return +el;});
      this.customerService.createCustomer(this.customer)
        .subscribe(data => console.log(data), error => console.log(error));
      this.gotoList();
    }

    onSubmit() {
      this.submitted = true;
      this.save();
    }

    gotoList() {
      this.router.navigate(['/customers']);
    }
  }
