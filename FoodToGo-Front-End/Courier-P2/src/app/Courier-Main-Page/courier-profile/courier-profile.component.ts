import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CourierProfile } from './mock-courier';
import { COURIERS } from './mock-courier-profile';
import {CourierProfileService} from './courier-profile.service'

@Component({
  selector: 'app-courier-profile',
  templateUrl: './courier-profile.component.html',
  styleUrls: ['./courier-profile.component.css']
})
export class CourierProfileComponent implements OnInit {

  @Input("value")
  courier = COURIERS;

  @Output() update = new EventEmitter();

  courierRegistrationUpdate! = FormGroup

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.courierRegistrationUpdate = this.fb.group({
      courierName: [''],
      DOB: [ ],
      driversLicenseNum: [''],
      makeAndModel: [''],
      licensePlateNum: [''],
      email: [''],
      courierPassword: [''],
    })
  }

  

}
