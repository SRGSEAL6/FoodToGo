import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courier-registration',
  templateUrl: './courier-registration.component.html',
  styleUrls: ['./courier-registration.component.css']
})
export class CourierRegistrationComponent implements OnInit {

  @Output() save = new EventEmitter();

  courierRegistration!: FormGroup

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.courierRegistration = this.fb.group({
      name: ['', [Validators.required]],
      birthday: [ , [Validators.required]],
      driversLicenseNum: ['', [Validators.required]],
      vehicleModel: ['', [Validators.required]],
      vehicleLicensePlate: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      backgroundCheck: [ , [Validators.required]]
    })
  }

  handleSubmit() {
    if(this.courierRegistration.valid){
      let CourierProfile = this.courierRegistration.value
      this.save.emit(CourierProfile)
    }
  }
}
