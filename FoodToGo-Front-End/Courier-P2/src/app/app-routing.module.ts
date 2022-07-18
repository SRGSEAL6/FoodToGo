import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from "@angular/common/http";


import { CourierIntroductionComponent } from './Courier-Introduction-Page/courier-introduction/courier-introduction.component';
import { CourierLoginComponent } from './Courier-Introduction-Page/courier-login/courier-login.component';
import { CourierRegistrationComponent } from './Courier-Introduction-Page/courier-registration/courier-registration.component';
import { CourierAcceptedRequestComponent } from './Courier-Main-Page/courier-accepted-request/courier-accepted-request.component';
import { CourierMainComponent } from './Courier-Main-Page/courier-main/courier-main.component';
import { CourierReceivedRequestComponent } from './Courier-Main-Page/courier-received-request/courier-received-request.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CourierIntroductionOpportunitiesComponent } from './courier-introduction-opportunities/courier-introduction-opportunities.component';
import { CourierProfileComponent } from './Courier-Main-Page/courier-profile/courier-profile.component';
import { CourierBenefitsComponent } from './courier-introduction-opportunities/courier-benefits/courier-benefits.component';
import { CourierFrequentQuestionsComponent } from './courier-introduction-opportunities/courier-frequent-questions/courier-frequent-questions.component';
import { AcceptedRequestPickUpComponent } from './Courier-Main-Page/courier-accepted-request/accepted-request-pick-up/accepted-request-pick-up.component';
import { AcceptedRequestOrderComponent } from './Courier-Main-Page/courier-accepted-request/accepted-request-order/accepted-request-order.component';
import { AcceptedRequestDropOffComponent } from './Courier-Main-Page/courier-accepted-request/accepted-request-drop-off/accepted-request-drop-off.component';
import { CourierIntroductionNavbarComponent } from './Courier-Introduction-Page/courier-introduction-navbar/courier-introduction-navbar.component';
import { CourierMainNavbarComponent } from './Courier-Main-Page/courier-main-navbar/courier-main-navbar.component';
import { RequestOrderComponent } from './Courier-Main-Page/request-order/request-order.component';


const routes: Routes = [
  // Introduction Page
  // {
  //   path: '',
  //   redirectTo: 'CourierIntroPage',
  //   pathMatch: 'full'
  // },
  {
    path: 'CourierIntroPage',
    component: CourierIntroductionComponent,
    outlet: 'introduction',
    children: [
      {
        path: 'courierOpportunities',
        component: CourierIntroductionOpportunitiesComponent,
        children: [
          {
            path: '',
            component: CourierBenefitsComponent,
          },
          {
            path: '',
            component: CourierFrequentQuestionsComponent,
          },
        ]
      },
      {
        path: 'courierSignUp',
        component: CourierRegistrationComponent,
      },
      {
        path: 'courierLogin',
        component: CourierLoginComponent
      },    
    ]
  },
  
  // Main Page
  {
    path: 'CourierMainPage',
    component: CourierMainComponent,
    outlet: 'main',
    children: [
      {
        path: 'courierCurrentRequest',
        component: CourierReceivedRequestComponent,
        children: [
          {
            path: '',
            component: RequestOrderComponent
          }
        ]
      }, 
      {
        path: 'courierAcceptedRequest',
        component: CourierAcceptedRequestComponent,
        children: [
          {
            path: '',
            component: AcceptedRequestPickUpComponent
          },
          {
            path: '',
            component: AcceptedRequestOrderComponent,
            children: [
              {
                path: '',
                component: RequestOrderComponent
              }
            ]
          },
          {
            path: '',
            component: AcceptedRequestDropOffComponent
          },
        ]
      },
      {
        path: 'courierProfile',
        component: CourierProfileComponent
      },
    ]
  },
]

@NgModule({
  declarations: [
  // Introduction Page
  CourierIntroductionComponent,
    CourierIntroductionNavbarComponent,
    // Navbar Link Components
      CourierIntroductionOpportunitiesComponent,
        CourierBenefitsComponent,
        CourierFrequentQuestionsComponent,
      CourierLoginComponent,
      CourierRegistrationComponent,

  // Main Page
  CourierMainComponent,
    CourierMainNavbarComponent,
      // Navbar Link Components
      CourierReceivedRequestComponent,
      CourierAcceptedRequestComponent,
        AcceptedRequestPickUpComponent,
        AcceptedRequestOrderComponent,
          RequestOrderComponent,
        AcceptedRequestDropOffComponent,
      CourierProfileComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
