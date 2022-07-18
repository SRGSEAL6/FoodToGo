import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from "@angular/common/http";



import { AppComponent } from './app.component';
import { CourierFooterComponent } from './courier-footer/courier-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    CourierFooterComponent,     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
