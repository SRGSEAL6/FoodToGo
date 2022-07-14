import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourierFrequentQuestionsComponent } from './courier-introduction/courier-frequent-questions/courier-frequent-questions.component';
import { CourierBenefitsComponent } from './courier-introduction/courier-benefits/courier-benefits.component';
import { CourierIntroductionNavbarComponent } from './courier-navbar/courier-introduction-navbar/courier-introduction-navbar.component';
import { CourierRegistrationComponent } from './courier-registration/courier-registration.component';
import { CourierReceivedRequestComponent } from './courier-received-request/courier-received-request.component';
import { CourierAcceptedRequestComponent } from './courier-accepted-request/courier-accepted-request.component';
import { CourierProfileComponent } from './courier-profile/courier-profile.component';
import { CourierIntroductionComponent } from './courier-introduction/courier-introduction.component';
import { CourierMainNavbarComponent } from './courier-navbar/courier-main-navbar/courier-main-navbar.component';
import { CourierMainComponent } from './courier-main/courier-main.component';
import { CourierFooterComponent } from './courier-footer/courier-footer.component';
import { CourierRegistrationNavbarComponent } from './courier-registration/courier-registration-navbar/courier-registration-navbar.component';
import { AcceptedRequestPickUpComponent } from './courier-accepted-request/accepted-request-pick-up/accepted-request-pick-up.component';
import { AcceptedRequestOrderComponent } from './courier-accepted-request/accepted-request-order/accepted-request-order.component';
import { AcceptedRequestDropOffComponent } from './courier-accepted-request/accepted-request-drop-off/accepted-request-drop-off.component';
import { CourierNavbarComponent } from './courier-navbar/courier-navbar.component';
import { RegistrationPersonalInfoComponent } from './courier-registration/courier-registration-form/registration-personal-info/registration-personal-info.component';
import { RegistrationVehicleInfoComponent } from './courier-registration/courier-registration-form/registration-vehicle-info/registration-vehicle-info.component';
import { RegistrationLoginInfoComponent } from './courier-registration/courier-registration-form/registration-login-info/registration-login-info.component';
import { CourierRegistrationFormComponent } from './courier-registration/courier-registration-form/courier-registration-form.component';
import { CourierLoginComponent } from './courier-login/courier-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CourierFrequentQuestionsComponent,
    CourierBenefitsComponent,
    CourierIntroductionNavbarComponent,
    CourierRegistrationComponent,
    CourierReceivedRequestComponent,
    CourierAcceptedRequestComponent,
    CourierProfileComponent,
    CourierIntroductionComponent,
    CourierMainNavbarComponent,
    CourierMainComponent,
    CourierFooterComponent,
    CourierRegistrationNavbarComponent,
    AcceptedRequestPickUpComponent,
    AcceptedRequestOrderComponent,
    AcceptedRequestDropOffComponent,
    CourierNavbarComponent,
    RegistrationPersonalInfoComponent,
    RegistrationVehicleInfoComponent,
    RegistrationLoginInfoComponent,
    CourierRegistrationFormComponent,
    CourierLoginComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
