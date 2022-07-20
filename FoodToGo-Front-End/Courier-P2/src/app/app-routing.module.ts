import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from "@angular/common/http";


import { CourierAcceptedRequestComponent } from './Courier-Main-Page/courier-accepted-request/courier-accepted-request.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AcceptedRequestPickUpComponent } from './Courier-Main-Page/courier-accepted-request/accepted-request-pick-up/accepted-request-pick-up.component';
import { AcceptedRequestOrderComponent } from './Courier-Main-Page/courier-accepted-request/accepted-request-order/accepted-request-order.component';
import { AcceptedRequestDropOffComponent } from './Courier-Main-Page/courier-accepted-request/accepted-request-drop-off/accepted-request-drop-off.component';
import { CourierMainNavbarComponent } from './Courier-Main-Page/courier-main-navbar/courier-main-navbar.component';
import { RequestOrderComponent } from './Courier-Main-Page/request-order/request-order.component';
import { CourierReceivedRequestComponent } from './Courier-Main-Page/courier-received-request/courier-received-request.component';
import { CourierProfileComponent } from './Courier-Main-Page/courier-profile/courier-profile.component';


const routes: Routes = [
  //Introduction Page
  // { path: '', component: CourierIntroductionNavbarComponent, outlet: "navbar"},

  // { path: 'CourierIntroPage', component: CourierIntroductionNavbarComponent},

  // { path: 'courierOpportunities', component: CourierIntroductionOpportunitiesComponent },

  // { path: 'courierSignUp', component: CourierRegistrationComponent,
      // data:  { courierSignUp: true },
  //     children: [
  //       { path: 'courierlogin', component: CourierLoginComponent }
  //     ]
  // },
  // { path: 'courierlogin', component: CourierLoginComponent,
  //   children: [
  //     { path: 'CourierMainPage', component: CourierMainNavbarComponent, outlet: "navbar"}
  //   ]
  // },
  // Main Page
  { path: 'CourierMainPage', component: CourierMainNavbarComponent },
  // outlet: "navbar"
  { path: 'courierCurrentRequest', component:CourierReceivedRequestComponent,
      children: [
        { path: 'courierAcceptedRequest', component: CourierAcceptedRequestComponent }
      ]
  },

  { path: 'courierAcceptedRequest', component: CourierAcceptedRequestComponent},

  { path: 'courierProfile', component: CourierProfileComponent,
      data: [
        { courierSignUp: false },
      ]
  },


]

@NgModule({
  declarations: [
  // Introduction Page
    // CourierIntroductionNavbarComponent,
    // // Navbar Link Components
    //   CourierIntroductionOpportunitiesComponent,
    //   CourierLoginComponent,
    //   CourierRegistrationComponent,

  // Main Page
    // CourierMainNavbarComponent,
      // Navbar Link Components
      CourierReceivedRequestComponent,
      CourierAcceptedRequestComponent,
        AcceptedRequestPickUpComponent,
        AcceptedRequestOrderComponent,
          RequestOrderComponent,
        AcceptedRequestDropOffComponent,
      // CourierProfileComponent

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
