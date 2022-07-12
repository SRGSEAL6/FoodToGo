import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourierFrequentQuestionsComponent } from './courier-frequent-questions/courier-frequent-questions.component';
import { CourierBenefitsComponent } from './courier-benefits/courier-benefits.component';
import { CourierIntroductionNavbarComponent } from './courier-introduction-navbar/courier-introduction-navbar.component';
import { CourierRegistrationComponent } from './courier-registration/courier-registration.component';
import { CourierReceivedRequestComponent } from './courier-received-request/courier-received-request.component';
import { CourierAcceptedRequestComponent } from './courier-accepted-request/courier-accepted-request.component';
import { CourierProfileComponent } from './courier-profile/courier-profile.component';
import { CourierIntroductionComponent } from './courier-introduction/courier-introduction.component';
import { CourierMainNavbarComponent } from './courier-main-navbar/courier-main-navbar.component';
import { CourierMainComponent } from './courier-main/courier-main.component';
import { CourierFooterComponent } from './courier-footer/courier-footer.component';
import { CourierRegistrationNavbarComponent } from './courier-registration-navbar/courier-registration-navbar.component';

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
    CourierRegistrationNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
